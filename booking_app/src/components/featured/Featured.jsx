import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = () => {

  const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

  return (
    <div className="featured">
      {loading ? "Loading please wait" : (<><div className="featuredItem">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg" 
            alt="" className="featuredImg" 
        />
        <div className="featuredTitles">
            <h2>Berlin</h2>
            <h3>{data[0]} properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img 
            src="https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-Fotolia.jpg" 
            alt="" className="featuredImg" 
        />
        <div className="featuredTitles">
            <h2>Madrind</h2>
            <h3>{data[1]} properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img 
            src="https://barcelonatm.ru/wp-content/uploads/2018/04/barselona-s-vysoty-1.jpg" 
            alt="" className="featuredImg" 
        />
        <div className="featuredTitles">
            <h2>London</h2>
            <h3>{data[2]} properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img 
            src="https://traveller-eu.ru/sites/default/files/GettyImages-543346433-1-e1491919780641-800x449.jpg" 
            alt="" className="featuredImg" 
        />
        <div className="featuredTitles">
            <h2>Rome</h2>
            <h3>123 properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img 
            src="https://www.uatraveller.com/wp-content/uploads/2018/10/im-istambul1-1140x641.jpg" 
            alt="" className="featuredImg" 
        />
        <div className="featuredTitles">
            <h2>Stambul</h2>
            <h3>123 properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img 
            src="https://cdn.vox-cdn.com/thumbor/TLFsavhPKwYFbHXliBwlR3IzyFw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22742798/1253246468.jpg" 
            alt="" className="featuredImg" 
        />
        <div className="featuredTitles">
            <h2>London</h2>
            <h3>123 properties</h3>
        </div>
      </div></>)}
    </div>
  )
}

export default Featured
