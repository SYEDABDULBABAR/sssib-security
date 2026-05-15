import {
  FaUserShield, FaCalendarCheck, FaKey,
  FaVideo, FaCar, FaHardHat, FaBuilding, FaGraduationCap,
  FaPills, FaShoppingCart, FaHome, FaIndustry, FaHotel,
  FaGlassCheers, FaHandshake,
  FaClock, FaMapMarkerAlt, FaChartLine, FaUsers,
  FaCheckCircle, FaMobileAlt, FaCamera, FaClipboardList,
  FaTachometerAlt, FaStar,
  FaLinkedin, FaTwitter, FaFacebook,
  FaInstagram, FaYoutube, FaWarehouse, FaCogs, FaLock,
  FaMusic, FaFutbol, FaRing, FaBeer, FaUniversity,
  FaTruck, FaFlask, FaStoreAlt, FaBed, FaDoorOpen,
  FaCity, FaTree, FaGlobeEurope, FaSearchLocation
} from 'react-icons/fa';

export const siteConfig = {
  name: 'SSSIB',
  fullName: 'SHARK SECURITY SERVICE AND INTELLIGENCE BUREAU',
  tagline: 'GLOBAL VIGILANCE, ELITE INTELLIGENCE',
  phone: '+44 (0) 800 123 4567',
  email: 'info@sssib.co.uk',
  address: '123 Security House, London, EC1A 1BB',
  year: new Date().getFullYear(),
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/#contact' },
];

export const serviceCategories = [
  {
    name: 'Security Guarding',
    services: [
      { icon: FaUserShield, title: 'Security Guarding', description: 'Professional SIA licensed guards for static and mobile security needs across your premises.' },
      { icon: FaDoorOpen, title: 'Door Supervision', description: 'Licensed door supervisors for venues, bars, clubs, and entertainment establishments.' },
      { icon: FaBuilding, title: 'Gatehouse Security', description: 'Professional gatehouse security personnel for access control and visitor management.' },
      { icon: FaKey, title: 'Key Holding', description: '24/7 key holding and rapid alarm response services to protect your property.' },
    ],
  },
  {
    name: 'Site Security',
    services: [
      { icon: FaHardHat, title: 'Construction Security', description: 'Specialised security solutions for construction sites, equipment, and materials.' },
      { icon: FaCogs, title: 'Factory Security', description: 'Comprehensive security for industrial facilities, manufacturing plants, and production sites.' },
      { icon: FaWarehouse, title: 'Warehouse Security', description: 'Protection for warehouse facilities including inventory security and access control.' },
      { icon: FaHome, title: 'Vacant Property Security', description: 'Protection of vacant properties against squatting, vandalism, and theft.' },
    ],
  },
  {
    name: 'Specialist Security',
    services: [
      { icon: FaGraduationCap, title: 'Education Security', description: 'Campus security services for schools, colleges, and universities.' },
      { icon: FaHotel, title: 'Hotel Security', description: 'Security solutions for hotels, resorts, and hospitality establishments.' },
      { icon: FaShoppingCart, title: 'Retail Security', description: 'Retail security including loss prevention, customer safety, and asset protection.' },
      { icon: FaUniversity, title: 'Student Accommodation', description: 'Specialised security for student housing, halls of residence, and private accommodation.' },
      { icon: FaPills, title: 'Pharmaceutical Security', description: 'High-security solutions for pharmaceutical facilities and supply chains.' },
      { icon: FaTruck, title: 'Logistics Security', description: 'Security services for logistics hubs, distribution centres, and supply chain operations.' },
    ],
  },
  {
    name: 'Event Security',
    services: [
      { icon: FaCalendarCheck, title: 'Event Security', description: 'Comprehensive security management for all types of events and gatherings.' },
      { icon: FaBuilding, title: 'Corporate Event Security', description: 'Professional security for corporate events, conferences, and business gatherings.' },
      { icon: FaMusic, title: 'Festivals Security', description: 'Large-scale security management for music festivals, cultural events, and public gatherings.' },
      { icon: FaFutbol, title: 'Sporting Event Security', description: 'Security services for sports venues, matches, tournaments, and athletic events.' },
      { icon: FaRing, title: 'Wedding Security', description: 'Discreet and professional security for weddings and private celebrations.' },
      { icon: FaGlassCheers, title: 'Entertainment Security', description: 'Security for entertainment venues, nightclubs, theatres, and leisure facilities.' },
      { icon: FaBeer, title: 'Pubs & Clubs Security', description: 'Licensed door supervision and crowd management for pubs, bars, and nightclubs.' },
    ],
  },
];

export const serviceLocations = [
  { region: 'East Midlands', cities: ['Nottingham', 'Leicester', 'Derby', 'Northampton', 'Lincoln'] },
  { region: 'London', cities: ['Central London', 'Greater London', 'City of London', 'Canary Wharf', 'Westminster'] },
  { region: 'South East', cities: ['Southampton', 'Brighton', 'Oxford', 'Reading', 'Maidstone'] },
  { region: 'South West', cities: ['Bristol', 'Plymouth', 'Exeter', 'Bournemouth', 'Swindon'] },
  { region: 'West Midlands', cities: ['Birmingham', 'Coventry', 'Wolverhampton', 'Stoke-on-Trent', 'Worcester'] },
];

export const industries = [
  { icon: FaHardHat, name: 'Construction' },
  { icon: FaGraduationCap, name: 'Education' },
  { icon: FaBuilding, name: 'Corporate Offices' },
  { icon: FaShoppingCart, name: 'Retail' },
  { icon: FaHotel, name: 'Hospitality' },
  { icon: FaPills, name: 'Pharmaceutical' },
  { icon: FaGlassCheers, name: 'Entertainment' },
  { icon: FaHome, name: 'Residential' },
  { icon: FaIndustry, name: 'Industrial' },
];

export const whyChooseUs = [
  { icon: FaUserShield, title: 'SIA Licensed Guards', description: 'All our personnel are fully SIA licensed and undergo rigorous background checks.' },
  { icon: FaClock, title: '24/7 Protection', description: 'Round-the-clock security monitoring and rapid response, 365 days a year.' },
  { icon: FaClipboardList, title: 'Real-time Reporting', description: 'Digital incident reporting with real-time updates and comprehensive audit trails.' },
  { icon: FaMapMarkerAlt, title: 'Nationwide Coverage', description: 'Security services available across all major UK cities and regions.' },
  { icon: FaTachometerAlt, title: 'Rapid Response Teams', description: 'Strategic response units ready to deploy within minutes of any alert.' },
  { icon: FaMobileAlt, title: 'Advanced Technology', description: 'Cutting-edge security technology including AI-powered surveillance systems.' },
  { icon: FaUsers, title: 'Highly Trained Staff', description: 'Ongoing training programs ensuring our team meets the highest standards.' },
  { icon: FaHandshake, title: 'Custom Security Solutions', description: 'Tailored security strategies designed around your specific requirements.' },
];

export const technologyFeatures = [
  { icon: FaMapMarkerAlt, title: 'Real-time Guard Tracking', description: 'GPS-enabled tracking of all security personnel with live location monitoring.' },
  { icon: FaChartLine, title: 'Incident Reporting Dashboard', description: 'Comprehensive dashboard for real-time incident management and reporting.' },
  { icon: FaCamera, title: 'Live CCTV Monitoring', description: '24/7 live monitoring of CCTV feeds with intelligent threat detection.' },
  { icon: FaCar, title: 'Patrol Monitoring System', description: 'Digital patrol monitoring with automated checkpoints and route verification.' },
  { icon: FaClipboardList, title: 'Digital Reports', description: 'Paperless digital reporting with instant access to historical data.' },
  { icon: FaUserShield, title: 'Client Portal', description: 'Secure client portal for real-time access to reports, schedules, and communications.' },
];

export const testimonials = [
  {
    name: 'James Mitchell',
    company: 'Mitchell Construction Ltd',
    role: 'Operations Director',
    content: 'SSSIB has transformed our site security. Their professional team and advanced monitoring systems give us complete peace of mind across all our construction sites.',
    rating: 5,
  },
  {
    name: 'Sarah Thompson',
    company: 'Thompson Retail Group',
    role: 'Security Manager',
    content: 'Outstanding service from day one. The team understood our retail security needs perfectly and delivered a tailored solution that reduced incidents by 60%.',
    rating: 5,
  },
  {
    name: 'David Richards',
    company: 'Richards & Co Solicitors',
    role: 'Managing Partner',
    content: 'We needed discreet, professional security for our corporate office. SSSIB delivered exactly that. Their staff are courteous, professional, and highly trained.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    company: 'Williams Hospitality Group',
    role: 'Events Director',
    content: 'Managing security for our events has never been easier. The team handles everything from door supervision to crowd management with exceptional professionalism.',
    rating: 4,
  },
  {
    name: 'Michael Chen',
    company: 'Chen Pharmaceutical',
    role: 'Facilities Director',
    content: 'High-security pharmaceutical environments require specialist knowledge. SSSIB demonstrated exceptional expertise and attention to regulatory compliance.',
    rating: 5,
  },
];

export const stats = [
  { value: 25, suffix: '+', label: 'Years of Experience', icon: FaClock },
  { value: 5000, suffix: '+', label: 'Clients Protected', icon: FaUsers },
  { value: 2500, suffix: '+', label: 'Guards Deployed', icon: FaUserShield },
  { value: 50, suffix: '+', label: 'Coverage Cities', icon: FaMapMarkerAlt },
  { value: 98, suffix: '%', label: 'Client Retention', icon: FaStar },
];

export const locations = [
  { city: 'London', region: 'South East' },
  { city: 'Manchester', region: 'North West' },
  { city: 'Birmingham', region: 'West Midlands' },
  { city: 'Glasgow', region: 'Scotland' },
  { city: 'Liverpool', region: 'North West' },
  { city: 'Leeds', region: 'Yorkshire' },
  { city: 'Edinburgh', region: 'Scotland' },
  { city: 'Bristol', region: 'South West' },
  { city: 'Cardiff', region: 'Wales' },
  { city: 'Belfast', region: 'Northern Ireland' },
  { city: 'Newcastle', region: 'North East' },
  { city: 'Nottingham', region: 'East Midlands' },
  { city: 'Southampton', region: 'South East' },
  { city: 'Sheffield', region: 'Yorkshire' },
  { city: 'Leicester', region: 'East Midlands' },
];

export const careers = {
  benefits: [
    'Competitive salary with performance bonuses',
    'Full SIA licensing and training paid',
    'Career progression opportunities',
    '24/7 support from management team',
    'Flexible shift patterns available',
    'Pension scheme and benefits package',
    'Advanced technology and equipment',
    'Ongoing professional development',
  ],
};

export const blogPosts = [
  {
    title: 'Top 10 Security Tips for Construction Sites',
    excerpt: 'Essential security measures every construction site should implement to protect equipment, materials, and personnel.',
    category: 'Security Tips',
    date: 'March 15, 2026',
    image: '/images/blog-construction.jpg',
  },
  {
    title: 'The Future of CCTV: AI-Powered Surveillance',
    excerpt: 'How artificial intelligence is revolutionising the security industry with smarter, faster threat detection.',
    category: 'Industry Updates',
    date: 'March 10, 2026',
    image: '/images/blog-cctv.jpg',
  },
  {
    title: 'Retail Security: Reducing Loss Prevention',
    excerpt: 'Effective strategies for reducing retail loss through comprehensive security measures and staff training.',
    category: 'Safety Awareness',
    date: 'March 5, 2026',
    image: '/images/blog-retail.jpg',
  },
  {
    title: 'SIA Licensing Updates 2026',
    excerpt: 'Important updates to SIA licensing requirements that all security professionals need to know.',
    category: 'Industry Updates',
    date: 'February 28, 2026',
    image: '/images/blog-sia.jpg',
  },
];

export const trustBadges = [
  { icon: FaClock, label: '24/7 Availability' },
  { icon: FaMapMarkerAlt, label: 'Nationwide Coverage' },
  { icon: FaChartLine, label: '98% Client Retention' },
  { icon: FaCheckCircle, label: 'SIA Licensed Personnel' },
];

export function toSlug(str: string): string {
  return str.toLowerCase().replace(/&/g, 'and').replace(/[\s]+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export interface ServiceWithSlug {
  slug: string;
  icon: any;
  title: string;
  description: string;
  category: string;
}

export const allServices: ServiceWithSlug[] = serviceCategories.flatMap(c =>
  c.services.map(s => ({ ...s, slug: toSlug(s.title), category: c.name }))
);

export function getServiceBySlug(slug: string): ServiceWithSlug | undefined {
  return allServices.find(s => s.slug === slug);
}

export interface ServiceDetail {
  slug: string;
  title: string;
  longDescription: string;
  features: string[];
  benefits: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'security-guarding': {
    slug: 'security-guarding', title: 'Security Guarding',
    longDescription: 'Our professional SIA-licensed security guards are the backbone of SSSIB. Whether you need static guarding at a corporate headquarters, mobile patrols across multiple sites, or dedicated protection for a construction site, our guards are rigorously trained, vetted, and equipped to handle any security challenge. Every guard undergoes extensive background checks, SIA licensing, and ongoing training to ensure the highest standards of professionalism and vigilance.',
    features: ['SIA-licensed static and mobile guarding', '24/7 site coverage including nights and weekends', 'Incident reporting with digital real-time updates', 'Access control and visitor management', 'Emergency response and evacuation procedures'],
    benefits: ['Deterrence of theft, vandalism, and unauthorised access', 'Peace of mind with round-the-clock professional protection', 'Rapid incident escalation and detailed reporting', 'Professional representation for your business premises', 'Scalable coverage from single guard to full team deployment'],
  },
  'door-supervision': {
    slug: 'door-supervision', title: 'Door Supervision',
    longDescription: 'SSSIB provides highly trained, SIA-licensed door supervisors for pubs, clubs, bars, and entertainment venues across the UK. Our door teams are skilled in conflict resolution, crowd management, and customer service, ensuring safe and enjoyable environments for patrons and staff alike. We understand the unique challenges of the night-time economy and tailor our approach to each venue\'s specific requirements.',
    features: ['SIA-licensed door supervisors', 'Conflict resolution and de-escalation training', 'Crowd management and capacity control', 'ID verification and age-restriction enforcement', 'Collaboration with venue management and local authorities'],
    benefits: ['Safe and welcoming venue atmosphere', 'Reduced risk of incidents and liability', 'Professional first point of contact for patrons', 'Compliance with licensing requirements and regulations', 'Expert handling of challenging situations'],
  },
  'gatehouse-security': {
    slug: 'gatehouse-security', title: 'Gatehouse Security',
    longDescription: 'Our gatehouse security personnel provide professional access control and visitor management for industrial sites, corporate campuses, logistics hubs, and gated communities. SSSIB gatehouse guards are trained to manage vehicle and pedestrian traffic, verify credentials, maintain logs, and ensure only authorised personnel gain entry to your premises.',
    features: ['Vehicle and pedestrian access control', 'Visitor management and badge issuance', 'Security log maintenance and reporting', 'Perimeter monitoring and patrol integration', 'Radio communication with site security team'],
    benefits: ['Controlled site access preventing unauthorised entry', 'Professional reception and security presence', 'Accurate visitor records for audit compliance', 'Integrated security within wider site protection plan', 'Enhanced perimeter security and situational awareness'],
  },
  'key-holding': {
    slug: 'key-holding', title: 'Key Holding',
    longDescription: 'SSSIB offers 24/7 key holding and alarm response services for businesses across the UK. When your alarm is triggered, our rapid response team is dispatched immediately to investigate, secure the premises, and liaise with emergency services if needed. Our ARC (Alarm Receiving Centre) monitors alerts around the clock, ensuring no incident goes unnoticed.',
    features: ['24/7 alarm monitoring and key holding', 'Rapid dispatch of trained response officers', 'Secure key storage and management', 'Emergency contact and escalation procedures', 'Detailed incident reports after every response'],
    benefits: ['24/7 peace of mind with professional alarm response', 'Reduced insurance premiums with monitored security', 'No need for staff to handle out-of-hours callouts', 'Professional incident management and documentation', 'Fast response times minimising damage and loss'],
  },
  'construction-security': {
    slug: 'construction-security', title: 'Construction Security',
    longDescription: 'Construction sites are particularly vulnerable to theft, vandalism, and trespassing. SSSIB provides specialised construction site security solutions including static guards, mobile patrols, CCTV monitoring, and key holding. We protect your equipment, materials, and project timeline with tailored security plans that adapt as your site progresses through different phases of construction.',
    features: ['Static guarding and mobile patrols for construction sites', 'Equipment and material theft prevention', 'Site access control for workers and deliveries', 'Out-of-hours perimeter monitoring', 'Coordination with site management and contractors'],
    benefits: ['Protection of high-value equipment and materials', 'Reduced theft and vandalism losses', 'Maintained project timelines through incident prevention', 'Safe working environment for construction staff', 'Flexible security scaling with project phases'],
  },
  'factory-security': {
    slug: 'factory-security', title: 'Factory Security',
    longDescription: 'Industrial facilities and manufacturing plants face unique security challenges including large perimeters, multiple entry points, shift changes, and valuable inventory. SSSIB delivers comprehensive factory security solutions combining physical guarding, access control systems, CCTV surveillance, and patrol management to protect your production environment around the clock.',
    features: ['Perimeter security and patrol management', 'Employee and visitor access control', 'Shift change security coordination', 'CCTV monitoring and surveillance', 'Asset protection for inventory and equipment'],
    benefits: ['Protection of manufacturing assets and inventory', 'Controlled access preventing theft and sabotage', 'Safe environment for shift workers at all hours', 'Reduced insurance and liability risks', 'Integrated security with factory operations'],
  },
  'warehouse-security': {
    slug: 'warehouse-security', title: 'Warehouse Security',
    longDescription: 'Warehouses and distribution centres require robust security to protect inventory, equipment, and supply chain operations. SSSIB provides tailored warehouse security solutions including perimeter guarding, CCTV monitoring, access control, and patrol services. Our guards are trained in logistics security best practices and work seamlessly with your warehouse management team.',
    features: ['Inventory protection and theft prevention', 'Loading bay and delivery area security', 'Access control for staff and contractors', 'CCTV monitoring with warehouse-specific coverage', 'Patrol routes optimised for warehouse layouts'],
    benefits: ['Reduced inventory shrinkage and theft', 'Secure supply chain and delivery operations', 'Controlled access for all personnel and vehicles', '24/7 monitoring of goods in transit and storage', 'Enhanced operational efficiency through integrated security'],
  },
  'vacant-property-security': {
    slug: 'vacant-property-security', title: 'Vacant Property Security',
    longDescription: 'Vacant properties are prime targets for squatting, vandalism, metal theft, and arson. SSSIB provides comprehensive vacant property protection including regular patrols, security assessments, boarding-up services, and rapid response. Our proactive approach deters criminals and maintains the condition and value of your property until it is sold, leased, or redeveloped.',
    features: ['Regular security patrols and inspections', 'Property condition monitoring and reporting', 'Squatter prevention and immediate response', 'Vandalism and theft deterrence', 'Coordination with property managers and insurers'],
    benefits: ['Protection of property value and condition', 'Reduced risk of squatting and associated costs', 'Lower insurance premiums with active security', 'Peace of mind for property owners and investors', 'Legal compliance with vacant property obligations'],
  },
  'education-security': {
    slug: 'education-security', title: 'Education Security',
    longDescription: 'Educational institutions from primary schools to universities require specialised security approaches that balance safety with a welcoming environment. SSSIB provides campus security services including access control, patrol management, event security, and emergency response. Our education security officers are trained in working with young people and understanding the unique safeguarding requirements of educational settings.',
    features: ['Campus access control and visitor management', 'Student and staff safety patrols', 'Event security for school and university events', 'Safeguarding-trained security personnel', 'Emergency planning and evacuation support'],
    benefits: ['Safe learning environment for students and staff', 'Controlled campus access preventing unauthorised entry', 'Professional security presence supporting safeguarding', 'Effective management of campus events and gatherings', '24/7 protection of educational facilities and assets'],
  },
  'hotel-security': {
    slug: 'hotel-security', title: 'Hotel Security',
    longDescription: 'Hotels, resorts, and hospitality establishments demand security that is both effective and discreet. SSSIB provides professional hotel security services including lobby presence, patrol management, CCTV monitoring, and guest incident response. Our security personnel are trained in customer service excellence, ensuring a positive guest experience while maintaining a secure environment.',
    features: ['Lobby and perimeter security presence', 'Guest and visitor access management', 'CCTV monitoring of public areas', 'Incident response and guest assistance', 'Coordination with hotel management and staff'],
    benefits: ['Safe and secure environment for guests and staff', 'Professional security that enhances guest experience', 'Reduced liability from incidents and accidents', '24/7 protection of hotel property and assets', 'Discreet security that blends with hospitality setting'],
  },
  'retail-security': {
    slug: 'retail-security', title: 'Retail Security',
    longDescription: 'Retail environments face challenges including shoplifting, fraud, customer disputes, and staff safety concerns. SSSIB provides comprehensive retail security solutions including uniformed guards, plain-clothes operatives, CCTV monitoring, and loss prevention strategies. Our retail security teams work with your management to create a safe shopping environment while protecting your bottom line.',
    features: ['Uniformed and plain-clothes loss prevention', 'Customer and staff safety management', 'CCTV monitoring and incident review', 'Access control during and after hours', 'Coordination with local police and retail crime partnerships'],
    benefits: ['Reduced shrinkage and improved profit margins', 'Safe shopping experience for customers', 'Secure environment for retail staff', 'Professional handling of theft and incidents', 'Integrated loss prevention strategies and reporting'],
  },
  'student-accommodation': {
    slug: 'student-accommodation', title: 'Student Accommodation',
    longDescription: 'Student accommodation requires security that is both robust and approachable. SSSIB provides specialist security services for halls of residence, private student housing, and university-managed accommodation. Our teams are trained in working with students, understanding their unique needs, and creating a safe living environment that supports academic success.',
    features: ['24/7 security presence at accommodation sites', 'Access control with student ID verification', 'Fire safety checks and evacuation support', 'Noise complaint and conflict resolution', 'Night-time patrols and wellbeing checks'],
    benefits: ['Safe and secure living environment for students', 'Reduced incidents of theft, damage, and anti-social behaviour', 'Professional support for accommodation management', 'Compliance with university safeguarding policies', 'Peace of mind for students, parents, and universities'],
  },
  'pharmaceutical-security': {
    slug: 'pharmaceutical-security', title: 'Pharmaceutical Security',
    longDescription: 'Pharmaceutical facilities, laboratories, and supply chains require the highest levels of security to protect sensitive materials, intellectual property, and regulatory compliance. SSSIB provides specialist pharmaceutical security solutions including controlled area access, material escorting, CCTV monitoring, and supply chain protection. Our personnel are trained in pharmaceutical security protocols and understand the critical importance of chain of custody.',
    features: ['Controlled area and clean room access management', 'Material escorting and chain of custody', 'CCTV monitoring with evidence-grade recording', 'Supply chain and logistics security', 'Regulatory compliance support for MHRA and Home Office'],
    benefits: ['Protection of sensitive pharmaceutical materials and IP', 'Regulatory compliance and audit readiness', 'Secure supply chain from manufacturing to distribution', 'Prevention of theft, tampering, and contamination', 'Specialist understanding of pharmaceutical security needs'],
  },
  'logistics-security': {
    slug: 'logistics-security', title: 'Logistics Security',
    longDescription: 'Logistics hubs, distribution centres, and supply chain operations require security that keeps goods moving while preventing theft and disruption. SSSIB provides comprehensive logistics security including yard management, vehicle inspection, loading bay security, and supply chain surveillance. Our guards are trained in logistics operations and work efficiently within busy distribution environments.',
    features: ['Yard management and vehicle inspection', 'Loading bay and goods-in security', 'Supply chain surveillance and tracking', 'Driver and contractor access control', 'Out-of-hours distribution centre protection'],
    benefits: ['Secure supply chain from warehouse to delivery', 'Reduced cargo theft and inventory loss', 'Efficient access management for high-volume logistics', '24/7 protection of distribution operations', 'Integrated security within logistics management systems'],
  },
  'event-security': {
    slug: 'event-security', title: 'Event Security',
    longDescription: 'Events of all sizes require professional security management to ensure attendee safety and smooth operations. SSSIB provides comprehensive event security services including crowd management, entry screening, perimeter security, and emergency planning. From intimate corporate gatherings to large-scale public events, our teams are experienced in delivering security that is effective, professional, and unobtrusive.',
    features: ['Crowd management and人流 control', 'Entry screening and ticket checking', 'Perimeter security and barrier management', 'Emergency planning and first aid coordination', 'Lost children and public assistance services'],
    benefits: ['Safe and well-managed events for all attendees', 'Professional security that enhances event reputation', 'Reduced liability and insurance requirements', 'Effective crowd control preventing incidents', 'Expert emergency response and incident management'],
  },
  'corporate-event-security': {
    slug: 'corporate-event-security', title: 'Corporate Event Security',
    longDescription: 'Corporate events, conferences, product launches, and business gatherings require security that is professional, discreet, and efficient. SSSIB provides tailored corporate event security including guest list management, VIP protection, bag screening, and access control. Our teams understand the importance of maintaining a professional corporate image while ensuring the highest safety standards.',
    features: ['Guest list management and VIP access control', 'Bag screening and security checkpoints', 'Discreet uniformed and plain-clothes presence', 'Coordination with event organisers and venues', 'Emergency response and evacuation planning'],
    benefits: ['Professional security aligned with corporate image', 'Safe environment for delegates, VIPs, and staff', 'Discreet protection without disrupting the event', 'Efficient entry management reducing queues', 'Comprehensive incident prevention and response'],
  },
  'festivals-security': {
    slug: 'festivals-security', title: 'Festivals Security',
    longDescription: 'Music festivals, cultural celebrations, and large-scale public gatherings present complex security challenges. SSSIB specialises in festival security management including perimeter security, crowd control, campsite patrols, and emergency response coordination. Our experienced festival security teams work closely with organisers, police, and emergency services to create safe and enjoyable festival experiences.',
    features: ['Perimeter security and fence patrols', 'Campsite security and welfare patrols', 'Stage and production area access control', 'Crowd management at performance areas', 'Multi-agency coordination with police and ambulance'],
    benefits: ['Safe festival environment for thousands of attendees', 'Effective crowd management reducing incidents', 'Professional security presence across all areas', '24/7 security throughout festival duration', 'Integrated emergency planning and response capabilities'],
  },
  'sporting-event-security': {
    slug: 'sporting-event-security', title: 'Sporting Event Security',
    longDescription: 'Sports venues and events require specialist security knowledge including stadium protocols, ticket fraud prevention, and crowd segregation. SSSIB provides comprehensive sporting event security from local matches to international tournaments. Our teams are trained in sports safety legislation, spectator management, and emergency procedures specific to sporting environments.',
    features: ['Stadium and venue security perimeters', 'Ticket inspection and fraud prevention', 'Crowd segregation and flow management', 'Player and official area protection', 'Coordination with club security and police'],
    benefits: ['Safe and enjoyable experience for spectators', 'Professional management of large crowds', 'Protection of players, officials, and VIPs', 'Reduced risk of disorder and safety incidents', 'Compliance with sports ground safety regulations'],
  },
  'wedding-security': {
    slug: 'wedding-security', title: 'Wedding Security',
    longDescription: 'Weddings and private celebrations require security that is discreet, professional, and sensitive to the occasion. SSSIB provides wedding security services including guest list management, venue access control, gift and cash protection, and incident prevention. Our security teams understand the importance of your special day and work behind the scenes to ensure everything runs smoothly and safely.',
    features: ['Guest list and invitation verification', 'Venue access and perimeter control', 'Gift, cash, and valuable item protection', 'Discreet uniformed presence', 'Coordination with venue and wedding planners'],
    benefits: ['Peace of mind for the happy couple and families', 'Discreet security that does not disrupt celebrations', 'Protection of gifts, cards, and valuable items', 'Professional handling of unexpected guests or incidents', 'Seamless coordination with wedding vendors and venues'],
  },
  'entertainment-security': {
    slug: 'entertainment-security', title: 'Entertainment Security',
    longDescription: 'Entertainment venues including theatres, nightclubs, cinemas, and leisure facilities require security that balances safety with customer experience. SSSIB provides comprehensive entertainment security including door supervision, crowd management, bag searches, and incident response. Our teams are trained in venue-specific security protocols and understand the importance of maintaining a welcoming atmosphere.',
    features: ['Venue access control and bag screening', 'Capacity management and crowd flow', 'Bar and stage area security', 'Late-night and event-specific protocols', 'Coordination with venue management and licensing authorities'],
    benefits: ['Safe and enjoyable entertainment experience', 'Compliance with venue licensing conditions', 'Reduced incidents and associated liabilities', 'Professional security that enhances venue reputation', 'Expert handling of alcohol-related situations'],
  },
  'pubs-and-clubs-security': {
    slug: 'pubs-and-clubs-security', title: 'Pubs & Clubs Security',
    longDescription: 'Pubs, bars, and nightclubs operate in high-risk environments requiring experienced, licensed security professionals. SSSIB provides specialist door supervision and security services for the night-time economy. Our teams are trained in conflict resolution, licensing law, and customer service, ensuring safe and successful operations for venues of all sizes.',
    features: ['SIA-licensed door supervisors', 'Entry policy enforcement and ID checking', 'Capacity monitoring and crowd management', 'Conflict de-escalation and incident response', 'Compliance with licensing objectives and conditions'],
    benefits: ['Safe environment for patrons and staff', 'Compliance with licensing laws and police partnerships', 'Reduced risk of violence and alcohol-related incidents', 'Professional security supporting business reputation', 'Expert understanding of night-time economy challenges'],
  },
};

export const allLocations = serviceLocations.map(loc => ({
  ...loc,
  slug: toSlug(loc.region),
}));

export function getLocationBySlug(slug: string): { slug: string; region: string; cities: string[] } | undefined {
  return allLocations.find(l => l.slug === slug);
}

export interface LocationDetail {
  slug: string;
  region: string;
  cities: string[];
  description: string;
  highlights: string[];
  population: string;
}

export const locationDetails: Record<string, LocationDetail> = {
  'east-midlands': {
    slug: 'east-midlands', region: 'East Midlands', cities: ['Nottingham', 'Leicester', 'Derby', 'Northampton', 'Lincoln'],
    description: 'The East Midlands is a thriving region with major cities, industrial centres, and growing business districts. SSSIB provides comprehensive security services across Nottingham, Leicester, Derby, Northampton, and Lincoln, covering everything from retail security in city centres to construction site protection across the region\'s many development projects.',
    highlights: ['Rapid response teams based in all major East Midlands cities', 'Specialist retail security for major shopping centres', 'Construction site security for ongoing development projects', 'Industrial and warehouse security for logistics hubs', 'Corporate office security for business districts'],
    population: '4.8 million',
  },
  'london': {
    slug: 'london', region: 'London', cities: ['Central London', 'Greater London', 'City of London', 'Canary Wharf', 'Westminster'],
    description: 'London is the capital\'s business, financial, and cultural heart. SSSIB delivers elite security services across the capital including Central London, the City of London, Canary Wharf, and Westminster. Our London teams are experienced in high-profile corporate security, event security for major venues, and specialist protection for the financial district.',
    highlights: ['Corporate security for headquarters and financial institutions', 'Event security for London\'s premier venues and arenas', 'Retail security for West End and shopping districts', 'Residential security for luxury developments', 'VIP protection and executive security services'],
    population: '8.9 million',
  },
  'south-east': {
    slug: 'south-east', region: 'South East', cities: ['Southampton', 'Brighton', 'Oxford', 'Reading', 'Maidstone'],
    description: 'The South East is one of the UK\'s most economically active regions, home to major ports, prestigious universities, and thriving business parks. SSSIB provides security services across Southampton, Brighton, Oxford, Reading, and Maidstone, offering everything from port and logistics security to university campus protection.',
    highlights: ['Port and maritime security in Southampton', 'University campus security in Oxford and Brighton', 'Business park and technology hub protection in Reading', 'Retail and leisure security across the region', 'Event security for festivals and sporting events'],
    population: '9.2 million',
  },
  'south-west': {
    slug: 'south-west', region: 'South West', cities: ['Bristol', 'Plymouth', 'Exeter', 'Bournemouth', 'Swindon'],
    description: 'The South West combines major urban centres with extensive rural areas, presenting diverse security challenges. SSSIB operates across Bristol, Plymouth, Exeter, Bournemouth, and Swindon, providing security for everything from Bristol\'s vibrant night-time economy to the region\'s growing industrial and logistics sectors.',
    highlights: ['Night-time economy security in Bristol\'s entertainment districts', 'Industrial and manufacturing security across the region', 'Event security for festivals and tourism attractions', 'Retail security in major shopping destinations', 'Hospitality and hotel security for tourism sector'],
    population: '5.6 million',
  },
  'west-midlands': {
    slug: 'west-midlands', region: 'West Midlands', cities: ['Birmingham', 'Coventry', 'Wolverhampton', 'Stoke-on-Trent', 'Worcester'],
    description: 'The West Midlands is a major industrial and commercial hub anchored by Birmingham, the UK\'s second city. SSSIB provides comprehensive security across Birmingham, Coventry, Wolverhampton, Stoke-on-Trent, and Worcester, covering the region\'s diverse needs from city centre retail and entertainment to manufacturing and logistics facilities.',
    highlights: ['City centre security in Birmingham\'s business and retail districts', 'Manufacturing and industrial site protection', 'Student accommodation security for multiple universities', 'Event security at the NEC, arenas, and stadiums', 'Retail security for major shopping centres including the Bullring'],
    population: '5.9 million',
  },
};

export const footerLinks = {
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/#contact' },
    { label: 'All Locations', href: '/locations' },
  ],
  services: allServices.slice(0, 8).map(s => ({ label: s.title, href: `/services/${s.slug}` })),
  social: [
    { icon: FaLinkedin, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaFacebook, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaYoutube, href: '#' },
  ],
};
