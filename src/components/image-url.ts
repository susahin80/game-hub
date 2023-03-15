//from: https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg
// to: https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg

const getCroppedImageUrl = (url: string) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
