# Liquid Glass Video Library

A simple static website with 5 categories, 5 buttons per category, a fixed liquid-glass sidebar, and a square (1:1) video area.

## 1. Add your videos
Put your MP4 files inside the `videos` folder. The starter buttons expect names like:

- `videos/category1-video1.mp4`
- `videos/category1-video2.mp4`
- ...
- `videos/category5-video5.mp4`

If your file names are different, open `script.js` and change the matching `file: "..."` path. You can also change `Category 1` and `Video 1` to your own labels there.

## 2. Test it
Open `index.html` in a browser. If the browser won't play local videos, use the GitHub Pages steps below or run a simple local server.

## 3. Publish it on GitHub Pages
1. Sign in at https://github.com and click **New repository**.
2. Name it `video-library`. Set it to **Public**, then create it.
3. On the repository page, choose **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, and the `videos` folder with your MP4 files. (Large video files may exceed GitHub's normal file-size limits.)
5. Click **Commit changes**.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Choose branch **main** and folder **/(root)**, then click **Save**.
9. Wait a minute, then refresh the Pages section. GitHub will show your website link.

## Important
- Keep video file names and paths exactly matched in `script.js`.
- GitHub blocks files over 100 MB in a normal repository. For very large videos, host the MP4s on a video/file host and change each `file` path to a direct video URL.
- The video display is square and uses `object-fit: contain`, so the whole video remains visible without cropping. The sidebar stays over the video area.
