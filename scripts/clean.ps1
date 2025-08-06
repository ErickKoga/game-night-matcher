Write-Host "Cleaning node_modules and dist folders..."
Get-ChildItem -Path . -Recurse -Directory -Include "node_modules", "dist" |
    ForEach-Object {
        Remove-Item $_.FullName -Recurse -Force -ErrorAction SilentlyContinue
    }
Write-Host "Clean-up complete."