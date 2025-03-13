export function FormatNumber (num){
    const tenthousand = 10000;
    const tenmillion = 10000000;
    // 賃料が1千万以上の場合は万単位で表示
    // 3桁ごとにカンマを挿入
    if (num >= tenmillion) {
        return Math.floor(num / tenthousand).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "万";
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};