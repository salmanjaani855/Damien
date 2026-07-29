import Icon from "../assets/Icon.svg";

const photographyServices = [
  { alt: "Event Photography", label: "Event Photography" },
  { alt: "Commercial Photography", label: "Commercial Photography" },
  { alt: "Product Photography", label: "Product Photography" },
  { alt: "Wedding Photography", label: "Wedding Photography" },
  { alt: "Landscape Photography", label: "Landscape Photography" },
  { alt: "Branding Photography", label: "Branding Photography" },
  { alt: "Portrait Photography", label: "Portrait Photography" },
];

const MarqueeItem = ({ alt, label }) => (
  <li className="flex items-center gap-2.5 shrink-0">
    <img className="h-10 w-10 object-cover" src={Icon} alt={alt} />
    <span className="leading-[150%] uppercase whitespace-nowrap">{label}</span>
  </li>

  
);

const ServiceMarquee = ({ direction = "left", textSize = "text-num-11" }) => {
  const isLeft = direction === "left";

  return (
    <section
      aria-label="Photography Services"
      className="w-full relative bg-gray-200 border-gray-100 border-solid border-t border-b overflow-hidden"
    >
      <div className={`marquee-track ${isLeft ? "marquee-left" : "marquee-right"}`}>
        <ul
          className={`marquee-content flex items-center gap-5 p-5 text-left ${textSize} text-[#d6d0fb] font-manrope list-none m-0`}
          aria-hidden={false}
        >
          {photographyServices.map((item) => (
            <MarqueeItem key={item.label} {...item} />
          ))}
        </ul>
        <ul
          className={`marquee-content flex items-center gap-5 p-5 text-left ${textSize} text-[#d6d0fb] font-manrope list-none m-0`}
          aria-hidden="true"
        >
          {photographyServices.map((item) => (
            <MarqueeItem key={`dup-${item.label}`} {...item} />
          ))}
        </ul>
      </div>
    </section>
    
  );
};

export default ServiceMarquee;
