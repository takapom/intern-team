export function Judgeimagesize(imageUrl){
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
        if (img.height > img.width) {
            return true;
        }
        else {
            return false;
        }
    };
}