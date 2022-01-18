type linkUrl = {
    title : string;
    url : string;
};
let homeUrls: linkUrl[] = [
    {
        title : "Home1",
        url : "/home",
    },
    {
        title : "Home2",
        url : "/home/home2",
    },
    {
        title : "Home3",
        url : "/home/home3",
    },
];
let listUrls: linkUrl[] = [
    {
        title : "Listing Grid",
        url : "/home",
    },
    {
        title : "Listing List",
        url : "/home/home2",
    },
    {
        title : "Listing Map",
        url : "/home/home3",
    },
];
export function getHomes() {
return homeUrls;
}