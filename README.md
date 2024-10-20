# MD Fact Farm
Social media platforms are now major sources of rapidly shared information. Our Chrome extension, MD FactFarm, simplifies fact-checking through AI-driven content analysis and verification. Initially focused on YouTube, our tool offers real-time fact-checking by scanning video content to identify and flag misinformation while providing reliable sources for users to verify accuracy.

[Read more](https://devpost.com/software/md-factfarm?ref_content=user-portfolio&ref_feature=in_progress)

## How to load extension
0. Clone the repository
1. Go to [Chrome extension](chrome://extensions/)
3. Enable developer mode
4. Load unpacked and select the extension folder


## How it works
![Image](./image.png)
- Extension will query active url and send it to API
- API will receive youtube video id from client and return the result whether the video is fake news or not. 
- For now it determine if the video is fake news by pulling transcript, comments title of the video then send to uAgennts (fakenew agent) to determine if the video is fake news or not.