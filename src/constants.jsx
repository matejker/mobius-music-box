export const WINGO_NOTES = [
    "E6", "D6", "C6",
    "B5", "A#5", "A5", "G#5", "G5", "F#5", "F5", "E5", "D#5", "D5", "C#5", "C5",
    "B4", "A#4", "A4", "G#4", "G4", "F#4", "F4", "E4", "D4", "C4",
    "B3", "A3", "G3", "D3", "C3"
    ];

export const WINGO_NOTES_URLS = {
    A1: "A1.mp3",
    A2: "A2.mp3",
//     C2: "C2.mp3",
//     B1: "B1.mp3",
//     D2: "D2.mp3",
//     E2: "E2.mp3",
//     F2: "F2.mp3",
//     G2: "G2.mp3",
};

const reverse_tones = WINGO_NOTES.slice().reverse();
export const WINGO_NOTES_INVERSE = {};

WINGO_NOTES.forEach((element, index) => {
  WINGO_NOTES_INVERSE[element] = reverse_tones[index];
});
