// scripts.js — small site-wide helpers
// Correct use of DOM APIs and safe mutation of a video element's playback rate.
document.addEventListener('DOMContentLoaded', () => {
	const video = document.getElementById('my-video') || document.querySelector('#my-video');
	if (!video) return;

	// Set playback rate safely. `playbackRate` controls playback speed.
	// Avoid referencing non-standard properties like `defaultPlayer`.
	try {
		video.playbackRate = 1;
	} catch (err) {
		// Defensive: if the element is not a HTMLMediaElement, do nothing.
		console.warn('Could not set playbackRate on #my-video', err);
	}
});