// Seal App Intent Trigger (Updated with Fallback)
document.getElementById('seal-btn').onclick = () => {
  const url = document.getElementById('yt-url').value.trim();
  if (!url) return alert('Paste a YouTube link first!');

  // 1. Copy link to clipboard automatically so it's ready in Seal
  navigator.clipboard.writeText(url).then(() => {
    // 2. Attempt to open Seal via Intent / Deep Link
    const sealUri = `seal://fetch?url=${encodeURIComponent(url)}`;
    
    // Try opening deep link
    window.location.href = sealUri;

    // Fallback timer: If Seal doesn't launch in 1 second, alert the user link is copied
    setTimeout(() => {
      alert('Link copied to clipboard! If Seal didn\'t auto-open, switch to di Seal app and paste it.');
    }, 1000);
  }).catch(() => {
    // Fallback if clipboard API is restricted
    window.location.href = `seal://fetch?url=${encodeURIComponent(url)}`;
  });
};
