$ErrorActionPreference = "Stop"
Write-Host "Building monorepo in specific order..."
$workspaces = @(
    "libs/utils",
    "libs/ui",
    "libs/storybook",
    "apps/api",
    "apps/web"
)
foreach ($ws in $workspaces) {
    Write-Host "🔧 Building $ws..."
    Push-Location $ws
    npm run build
    Pop-Location
}
Write-Host "✅ Build completed."
