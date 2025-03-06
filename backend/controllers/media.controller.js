// import { fetchFromTMDB } from "../services/tmdb.service.js";

// export async function getTrending(req, res) {
//   const { type } = req.params; // 'movie' or 'tv'
//   try {
//     const data = await fetchFromTMDB(
//       `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`
//     );
//     const randomItem =
//       data.results[Math.floor(Math.random() * data.results?.length)];
//     res.json({ success: true, content: randomItem });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error occurred" });
//   }
// }

// export async function getTrailers(req, res) {
//   const { type, id } = req.params;
//   try {
//     const data = await fetchFromTMDB(
//       `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`
//     );
//     res.json({ success: true, trailers: data.results });
//   } catch (error) {
//     if (error.response?.status === 404) {
//       return res.status(404).send(null);
//     }
//     res.status(500).json({ success: false, message: "Server error occurred" });
//   }
// }

// export async function getDetails(req, res) {
//   const { type, id } = req.params;
//   try {
//     const data = await fetchFromTMDB(
//       `https://api.themoviedb.org/3/${type}/${id}?language=en-US`
//     );
//     res.status(200).json({ success: true, content: data });
//   } catch (error) {
//     if (error.response?.status === 404) {
//       return res.status(404).send(null);
//     }
//     res.status(500).json({ success: false, message: "Server error occurred" });
//   }
// }

// export async function getSimilar(req, res) {
//   const { type, id } = req.params;
//   try {
//     const data = await fetchFromTMDB(
//       `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US`
//     );
//     res.status(200).json({ success: true, similar: data.results });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error occurred" });
//   }
// }

// export async function getByCategory(req, res) {
//   const { type, category } = req.params;
//   try {
//     const data = await fetchFromTMDB(
//       `https://api.themoviedb.org/3/${type}/${category}?language=en-US`
//     );
//     res.status(200).json({ success: true, content: data.results });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error occurred" });
//   }
// }
