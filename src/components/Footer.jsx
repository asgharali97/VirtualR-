import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";

const Footer = () => {
  return (
    <>
      <div className="mt-20 py-10 border-t border-neutral-700">
        <div className="grid gird grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-md mb-4 font-semi-bold">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md mb-4 font-semi-bold">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md mb-4 font-semi-bold">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
