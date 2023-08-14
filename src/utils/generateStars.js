export const generateStars = (number) => {
    const stars = ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️"];
    const roundNumber = Math.round(number);
    return stars.slice(0, roundNumber).join(" ");
};
