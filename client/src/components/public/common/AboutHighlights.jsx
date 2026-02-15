const trustPoints = [
     { icon: "fa-solid fa-circle-check", text: "MNRE-Compliant Solutions" },
     { icon: "fa-solid fa-solar-panel", text: "Tier-1 Solar Components" },
     { icon: "fa-solid fa-sliders", text: "Custom System Design" },
     { icon: "fa-solid fa-headset", text: "End-to-End Support" }
];

const AboutTrustStrip = () => {
     return (
          <div className="mt-6">
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700">
                    {trustPoints.map((item, index) => (
                         <li
                              key={index}
                              className="flex items-center gap-2"
                         >
                              <i className={`${item.icon} text-green-600 text-base`}></i>
                              <span>{item.text}</span>
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default AboutTrustStrip;
