$ErrorActionPreference = 'Stop'

$projectPath = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$siteUrl = 'http://localhost:3000/'
$outputLog = Join-Path $projectPath '.local-server.out.log'
$errorLog = Join-Path $projectPath '.local-server.err.log'
$pidFile = Join-Path $projectPath '.local-server.pid'

Set-Location -LiteralPath $projectPath

function Test-LocalSite {
  try {
    $response = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 2
    return $response.StatusCode -eq 200
  }
  catch {
    return $false
  }
}

if (-not (Get-Command node.exe -ErrorAction SilentlyContinue)) {
  throw 'Node.js is not installed. Install Node.js 22 or newer and try again.'
}

if (-not (Test-Path -LiteralPath (Join-Path $projectPath 'node_modules'))) {
  Write-Host 'Installing website dependencies for the first run...'
  & npm.cmd install
  if ($LASTEXITCODE -ne 0) {
    throw 'Website dependency installation failed.'
  }
}

if (-not (Test-LocalSite)) {
  Write-Host 'Starting the Sudan Youth Agenda website...'
  $npmPath = (Get-Command npm.cmd -ErrorAction Stop).Source
  $process = Start-Process -FilePath $npmPath -ArgumentList @('run', 'dev') -WorkingDirectory $projectPath -WindowStyle Hidden -RedirectStandardOutput $outputLog -RedirectStandardError $errorLog -PassThru
  Set-Content -LiteralPath $pidFile -Value $process.Id -Encoding ascii

  $deadline = (Get-Date).AddSeconds(90)
  while ((Get-Date) -lt $deadline) {
    if (Test-LocalSite) {
      break
    }
    if ($process.HasExited) {
      $details = if (Test-Path -LiteralPath $errorLog) { Get-Content -Raw -LiteralPath $errorLog } else { '' }
      throw "The website server stopped before startup completed. $details"
    }
    Start-Sleep -Milliseconds 750
  }
}

if (-not (Test-LocalSite)) {
  throw 'The website did not become ready within 90 seconds.'
}

Start-Process $siteUrl
Write-Host 'The website is running and has been opened in your browser.'

