/* AllanPisoWiFi AI DRAMA: source discovery shortlist, 2026-11-05.
 * TEST DATA ONLY. NOT WIRED TO THE LIVE IPTV/ANIME PLAYER.
 * These are public YouTube video IDs from creator-upload links. Embed availability,
 * local playback, regional availability, and commercial compliance NOT yet tested.
 * Requires a separate YouTube <iframe> player, not <video>/Hls.js.
 * Preserve all existing payment/time, IPTV and 35 anime episode code.
 * Do not charge specifically for access to YouTube embedded video.
 */
var aiDramaCandidates = [
  {
    title: "The Beaumont Dynasty - EP 01: The Marriage",
    creator: "ReidWorks Studio", videoId: "1JCvB_99DpI",
    category: "AI microdrama", aspectRatio: "9/16"
  },
  {
    title: "The Beaumont Dynasty - EP 02: The Secret Sister",
    creator: "ReidWorks Studio", videoId: "nLUikZ24Ktg",
    category: "AI microdrama", aspectRatio: "9/16"
  },
  {
    title: "The Beaumont Dynasty - EP 03: Bloodlines",
    creator: "ReidWorks Studio", videoId: "M_AIellxXps",
    category: "AI microdrama", aspectRatio: "9/16"
  },
  {
    title: "The Beaumont Dynasty - EP 04: The Photograph",
    creator: "ReidWorks Studio", videoId: "jwQ5YNmnseE",
    category: "AI microdrama", aspectRatio: "9/16"
  },
  {
    title: "The Plus-Size Bride Abandoned by a Mafia Don",
    creator: "DramaMuse", videoId: "RTOkwoDJifo",
    category: "AI-made full drama", aspectRatio: "16/9"
  },
  {
    title: "Married Into a Wealthy Family by Mistake",
    creator: "Whisper of Romantic", videoId: "iqlSvK0sH60",
    category: "AI-made full drama", aspectRatio: "16/9"
  },
  {
    title: "He Hated All Women, Until He Met the Mother of His Secret Child",
    creator: "Whisper of Romantic", videoId: "jjj7SudNGT4",
    category: "AI-made full drama", aspectRatio: "16/9"
  },
  {
    title: "Part One - African Family Drama Full Story",
    creator: "Flora AI Drama Studio", videoId: "Fayw3dKYa44",
    category: "AI-generated vertical drama", aspectRatio: "9/16"
  }
];
/* For a future iframe-only pilot:
 *   const embedUrl = "https://www.youtube.com/embed/" + aiDramaCandidates[0].videoId;
 * Do not place these URLs in iptvlist or existing HLS video src.
 */
