# Hero plates

Tone plates for the home page hero, drawn at runtime as 1-bit stipple by `components/ascii/symbol-hero.tsx`.
Needs Python with numpy, Pillow, scipy, scikit-image and rembg.

    python bake.py david.jpg plates/david --crop 0.12,0.1,0.82,0.56 --cracks 6 --seed 11 --gamma 0.7 --clip 0.012 --dot 1.5
    python bake.py justice.jpg plates/justice --crop 0.17,0.07,0.8,1 --cracks 7 --seed 5 --bronze --dot 1.5
    python symbols.py

Then save `plates/<name>_tone.png` to `public/hero/<name>.webp`.

Sources (Wikimedia Commons):
- David: "'David' by Michelangelo JBU06.JPG", Jörg Bittner Unna, CC BY 3.0
- Lady Justice: "Close-up of Lady Justice statue holding scales, symbolizing justice and fairness.jpg"
