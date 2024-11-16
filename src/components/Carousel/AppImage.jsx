export const AppImage = ({
    image,
    index,
    selected,
}) => {
    return (
        <div
            className={` flex absolute w-full h-full ${selected === index
                ? "left-0"
                : selected > index
                    ? "-left-full"
                    : "left-full"
                }`}
            style={{ transition: "left .25s" }}
        >
            <img
                src={image}
                alt="carousel"
                className="mx-auto w-full h-[70vh] object-cover object-center"
            />
        </div>
    );
};