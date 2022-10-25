import useFetch from "../../hooks/useFetch";
import "./propertyList.css"

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
    "https://pix10.agoda.net/hotelImages/66178/0/a6814d8a47dd5b7870c568bd159033d1.jpg?ca=0&ce=1&s=1024x768",
    "https://trekbaron.com/wp-content/uploads/2020/07/types-of-resorts-July282020-1-min.jpg",
    "https://images.squarespace-cdn.com/content/v1/5d8350f138e929025e59bf2d/1569414329283-F6YXY8URA64AI8VFQ0J0/studioliv-interior-design-villa-vught-12.jpg",
    "https://www.cabinsforyou.com/public/img/luxury-gatlinburg-cabin-rental-hero.jpg",
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList
