#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parent
white = "".join(
    (ROOT / name).read_text()
    for name in sorted(ROOT.glob("logo-white-part-*.txt"))
)
blue = (ROOT / "logo-blue-path.txt").read_text().strip()
svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="577" height="157" viewBox="0 0 2308 628" fill="none">
<g transform="translate(0,628) scale(0.1,-0.1)">
<g fill="#FFFFFF"><path d="{white}"/></g>
<g fill="#4A83E8"><path d="{blue}"/></g>
</g>
</svg>
"""
out = ROOT.parent / "public" / "vayulabs-logo.svg"
out.write_text(svg)
print(f"Wrote {out} ({out.stat().st_size} bytes)")
