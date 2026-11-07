import numpy as np
from scipy import ndimage as ndi
def blue_noise(n=128, seed=3, iters=6):
    """Approximate blue noise: high-passed white noise, rank-normalised to a uniform 0..1."""
    rng = np.random.default_rng(seed)
    x = rng.random((n, n))
    for _ in range(iters):
        x = x - ndi.gaussian_filter(x, 1.25, mode="wrap")
        r = np.empty(n * n); r[np.argsort(x.ravel())] = np.linspace(0, 1, n * n)
        x = r.reshape(n, n)
    return x
