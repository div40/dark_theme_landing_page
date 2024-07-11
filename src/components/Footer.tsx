import InstaIcon from "../assets/icons/insta.svg";
import TwitterIcon from "../assets/icons/x-social.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className=" flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            &copy; 2024 Your Company Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li className="cursor-pointer">
              <InstaIcon />
            </li>
            <li className="cursor-pointer">
              <TwitterIcon />
            </li>
            <li className="cursor-pointer">
              <TiktokIcon />
            </li>
            <li className="cursor-pointer">
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
