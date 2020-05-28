/*********************************后台接口********************************/

var serverBaseUrl="http://localhost:3000";
const BackendURL={
    zhoushidian:serverBaseUrl+"/pointData",//州市点
    zhoushidian2:"./datas/ptsj.json",//州市点2
    yn_xzbj:"./datas/53.geojson",//云南行政边界
};
export default BackendURL;