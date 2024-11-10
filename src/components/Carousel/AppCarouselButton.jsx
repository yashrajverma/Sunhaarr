import Icon from "../Icon";

export const AppCarouselButton = ({
  direction,
  onClick,
}) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 ${direction === "left" ? " left-5" : "right-5"
        }`}
    >
      <button
        className="p-1 rounded-full bg-white shadow"
        onClick={() => onClick()}
      >
        {direction === "left" ? <Icon iconName="chevronleft" /> : <Icon iconName="chevronright" />}
      </button>
    </div>
  );
};