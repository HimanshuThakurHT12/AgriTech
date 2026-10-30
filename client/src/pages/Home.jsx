import { Link } from 'react-router-dom';
import {
  FiArrowUpRight,
  FiSun,
  FiDroplet,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiShoppingBag,
  FiMapPin
} from 'react-icons/fi';
const features = [
  {icon:FiTrendingUp,title:'Crop management',text:'Track crop stages, planting dates, and field health in one simple workspace.'},
  {icon:FiMapPin,title:'Farm management',text:'Organize your fields, acreage, locations, and seasonal farming activity.'},
  {icon:FiDroplet,title:'Soil & water care',text:'Keep soil observations and resource use visible to support better decisions.'},
  {icon:FiSun,title:'Weather insights',text:'Check local conditions and use forecasts to plan farm work with confidence.'},
  {icon:FiShoppingBag,title:'Farm marketplace',text:'Explore agricultural supplies and keep track of your product bookings.'},
  {icon:FiUsers,title:'Community & experts',text:'A foundation for sharing field experience and getting trusted guidance.'}
];
export default function Home(){return <><section className="hero"><div className="hero-shade"/><div className="container hero-content"><div className="hero-copy"><div className="hero-pill"><span/> TECHNOLOGY ROOTED IN FARMING</div><h1>Grow smarter.<br/><em>Harvest better.</em></h1><p>Practical digital tools to help farmers make informed decisions, manage resources, and build a more resilient future.</p><div className="d-flex flex-wrap gap-3 mt-4"><Link className="btn btn-agri btn-lg" to="/register">Get started <FiArrowUpRight/></Link><Link className="btn btn-outline-light btn-lg" to="/crops-info">Explore crop guide</Link></div><div className="hero-note"><FiShield/> Built for accessible, farmer-first digital agriculture</div></div><div className="hero-float"><div className="float-icon"><FiSun/></div><div><small>YOUR FARM, AT A GLANCE</small><strong>Better decisions start here</strong><span>Weather · Crops · Resources</span></div></div></div><div className="hero-bottom"><div className="container"><span>FARM MANAGEMENT</span><span>CROP INSIGHTS</span><span>WEATHER UPDATES</span><span>AGRICULTURAL RESOURCES</span></div></div></section><section className="section-pad intro-section"><div className="container intro-grid"><div><div className="eyebrow">ABOUT AGRITECH</div><h2>Farming experience meets <span>digital intelligence.</span></h2></div><div className="intro-copy"><p>AgriTech brings everyday farm management into one connected platform. Keep your farm and crop records organized, review local weather, and explore agricultural resources without losing sight of what matters most: your land and your livelihood.</p><Link to="/register" className="text-link">Start your farm profile <FiArrowUpRight/></Link></div></div></section><section className="section-pad feature-section"><div className="container"><div className="section-title"><div className="eyebrow">TOOLS FOR EVERY SEASON</div><h2>Everything you need to <span>farm with clarity.</span></h2><p>Useful tools, designed around the real rhythm of farming.</p></div><div className="row g-4 mt-3">{features.map((f,i)=><div className="col-md-6 col-lg-4" key={f.title}><article className="feature-card"><div className="feature-icon"><f.icon/></div><div className="feature-num">0{i+1}</div><h3>{f.title}</h3><p>{f.text}</p><Link to={i===3?'/weather':i===4?'/products':i===0?'/crops-info':'/register'} aria-label={`Explore ${f.title}`}><FiArrowUpRight/></Link></article></div>)}</div></div></section><section className="cta-section"><div className="container cta-inner"><div><div className="eyebrow">YOUR NEXT SEASON STARTS NOW</div><h2>Build a healthier, more organized farm.</h2><p>Create your profile and bring your farm records together.</p></div><Link className="btn btn-light btn-lg" to="/register">Create free account <FiArrowUpRight/></Link></div></section></>}
