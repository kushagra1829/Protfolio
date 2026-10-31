/**
 * CONTENT MODEL — SINGLE SOURCE OF TRUTH
 * Personal Portfolio of Kushagra Anand
 * Theme: Chennai (SRM '28) ➔ Umeå, Sweden (Human-Centered AI & Systems)
 */

const CONTENT = {
  name: "Kushagra Anand",
  nickname: "kushagra",
  title: "Computer Science Engineer // Systems & AI",
  sticker: "SRM '28 / UMEÅ, SWEDEN",
  routeCoordinates: {
    start: { name: "SRM CHENNAI", lat: "13.0827° N", lng: "80.2707° E" },
    end: { name: "UMEÅ UNIVERSITY", lat: "63.8258° N", lng: "20.2630° E" },
    bearing: "FLIGHT / CODE RUNTIME ➔ 6,700 KM"
  },
  
  heroRoles: [
    { label: "Started as", value: "CS student @ SRM Chennai" },
    { label: "Became", value: "Full-stack & systems builder" },
    { label: "Currently", value: "Human-Centered AI & Robotics @ Umeå" }
  ],
  
  heroLine: "Building low-latency systems & human-centered intelligent tools from Chennai to the Arctic Circle.",
  heroChart: {
    label: "CHENNAI ➔ UMEÅ FLIGHT LOG",
    metric: "09:00 ➔ 02:00 CODE RUNTIME",
    status: "SYSTEM HEALTH: NOMINAL"
  },

  topBarLines: [
    "LAT 13.08° N (CHENNAI) ➔ 63.82° N (UMEÅ) // ROUTE ACTIVE",
    "BUILDING SYSTEMS THAT CLOSE THE GAP BETWEEN REPORTING AND SOLVING",
    "CLEANMAP: 1,420+ CLEANUPS LOGGED // 3 HACKATHONS WON",
    "PATENT FILED: ALERT RIDE SMART ACCIDENT & DROWSINESS HELMET",
    "PERFORMANCE PROGRAMMING: C++ k-mer JACCARD OPTIMIZATION (k=1..32)",
    "HUMAN-CENTERED AI & REVERSE-VENDING ROBOTICS @ UMEÅ"
  ],

  // Origin Section (The Open Book)
  origin: {
    headline: "FROM CHENNAI'S HEAT TO UMEÅ'S SNOW, I WRITE SOFTWARE FOR REAL-WORLD SURVIVAL.",
    philosophy: "I believe the purpose of engineering is to eliminate the latency between spotting a crisis and deploying a working solution. Whether dispatching volunteers to waste hotspots, halting a vehicle before microsleep strikes, or tuning C++ bitsets to sub-millisecond execution, I build resilient systems that never crack under pressure.",
    hustledAt: [
      {
        place: "Axis Bank",
        role: "Backend Intern",
        period: "Jun – Jul 2026",
        detail: "Engineered scalable data ingestion pipelines & resilient microservice backends."
      },
      {
        place: "SRM IST Chennai",
        role: "B.Tech Computer Science Engineering ('28)",
        period: "2024 – 2028",
        detail: "Department Top Tier, competitive programming, and hardware innovation labs."
      },
      {
        place: "Umeå University, Sweden",
        role: "International Exchange Scholar",
        period: "Autumn 2026",
        detail: "Specializing in Human-Centered AI, Intelligent Robotics, and C++ Performance Programming."
      }
    ],
    stats: [
      {
        value: "9.34",
        label: "ACADEMIC GPA",
        note: "SRM Institute of Science and Technology, Chennai"
      },
      {
        value: "1",
        label: "PATENT FILED",
        note: "Alert Ride Helmet: Intelligent Accident & Drowsiness Protection"
      },
      {
        value: "3",
        label: "HACKATHONS WON",
        note: "CleanMap: Community Waste Telemetry & Geo-Dispatch"
      }
    ],
    story: "I started coding because I refused to accept that physical, human problems had to wait for slow bureaucracy. In Chennai, seeing unmanaged street dumps and hazardous highway transit sparked CleanMap and the Alert Ride Helmet. Crossing continents to northern Sweden at Umeå University deepened my focus on cache-coherent C++ systems and human-centered robotics. Every line of code is another waypoint on an uncompromising technical journey."
  },

  // Projects Section 03 — Expandable Card Deck (4 Cards)
  projects: [
    {
      id: "cleanmap",
      stationCode: "STN-01 // CHENNAI",
      name: "CleanMap",
      oneliner: "Community waste reporting & crowd-sourced cleanup telemetry platform.",
      role: "Full-Stack Lead",
      weeks: "12 Weeks (SRM Circuit)",
      tag: "ARCHIVED // STN-01",
      previewImage: "assets/cleanmap-preview.svg",
      bullets: [
        "Engineered geospatial reporting system with photo-verification, automated hotspot clustering, and civic leaderboards.",
        "Integrated real-time volunteer task claiming and resolution validation pipeline to deter fraudulent submissions."
      ],
      stats: [
        { label: "Cleanups Logged", value: "1,420+" },
        { label: "Hackathon Podiums", value: "3 Wins" },
        { label: "Resolution Ratio", value: "80%" }
      ],
      links: {
        github: "https://github.com/kushagra-anand/cleanmap",
        demo: "https://cleanmap.kushagra.dev"
      }
    },
    {
      id: "seefaa",
      stationCode: "STN-02 // CLOUD INTEL",
      name: "SEEFAA",
      oneliner: "High-yield CFA Level I exam preparation & retention intelligence platform.",
      role: "Full-Stack Architect",
      weeks: "8 Weeks",
      tag: "ARCHIVED // STN-02",
      previewImage: "assets/seefaa-preview.svg",
      bullets: [
        "Architected auth-gated mock exam engine with Supabase Postgres and Row Level Security, preventing question leaks.",
        "Implemented adaptive spaced-repetition algorithms dynamically re-weighting candidate weaknesses across 10 core financial topics."
      ],
      stats: [
        { label: "Core CFA Modules", value: "10" },
        { label: "Target Pass Rate", value: "84.6%" },
        { label: "Auth Isolation", value: "100% RLS" }
      ],
      links: {
        github: "https://github.com/kushagra-anand/seefaa",
        demo: "https://seefaa.lovable.app"
      }
    },
    {
      id: "dnaseq",
      stationCode: "STN-03 // SYSTEMS LAB",
      name: "DNASequenceSimilarity",
      oneliner: "C++ k-mer Jaccard similarity engine with SIMD vectorization and mutation benchmarks.",
      role: "Systems Programmer",
      weeks: "Umeå Coursework",
      tag: "ARCHIVED // STN-03",
      previewImage: "assets/dnaseq-preview.svg",
      bullets: [
        "Formulated dual-path algorithmic engine toggling between direct bitset array indexing and sorted inverted hashes.",
        "Demonstrated empirical crossover threshold at k≈12–13 where sparse set hashing overtakes dense table lookup."
      ],
      stats: [
        { label: "k-mer Exploration", value: "1 – 32" },
        { label: "Crossover Horizon", value: "k ≈ 12–13" },
        { label: "Execution Modes", value: "2 Paths" }
      ],
      links: {
        github: "https://github.com/kushagra-anand/DNASequenceSimilarity"
      }
    },
    {
      id: "recycling-pant",
      stationCode: "STN-04 // UMEÅ HCAI",
      name: "Recycling Pant-Machine",
      oneliner: "AI-powered reverse vending recycling system with multi-sensor material classification.",
      role: "HCAI & Robotics Team 1",
      weeks: "Umeå University",
      tag: "ARCHIVED // STN-04",
      previewImage: "assets/pantmachine-preview.svg",
      bullets: [
        "Created edge vision and inductive sensor pipeline to distinguish aluminum cans from PET plastic and contaminants.",
        "Built fill-level load cell telemetry and humidity-driven mold risk forecaster to optimize collection schedules."
      ],
      stats: [
        { label: "Sensor Modalities", value: "3 Modes" },
        { label: "Robotics Team", value: "Group 1" },
        { label: "Mold Risk Barrier", value: "12% Max" }
      ],
      links: {
        github: "https://github.com/kushagra-anand/recycling-pant-machine"
      }
    }
  ],

  // Best Work Section 04 — The Signature Chennai ➔ Umeå Route (5 Stations)
  bestWork: [
    {
      id: "alert-ride",
      stationNumber: "01",
      stationName: "CHENNAI CENTRAL",
      stationSubtitle: "SRM ORIGIN // HARDWARE & SAFETY",
      title: "Alert Ride Helmet",
      category: "EMBEDDED SAFETY & ACCIDENT TELEMETRY",
      headline: "Patent-filed intelligent helmet apparatus dispatching SOS alerts upon impact or microsleep.",
      badge: "PATENT FILED // IP INDIA",
      color: "#C1272D",
      tags: ["EMBEDDED C++", "MPU6050 SENSOR", "GSM / GPS SOS"],
      summary: "An active wearable telemetry node that bridges the deadly gap between two-wheeler accidents and medical response.",
      previewImage: "assets/alertride-preview.svg",
      bullets: [
        "Formulated threshold jerk and collision interrupt detection using 6-DOF MPU6050 accelerometer.",
        "Integrated IR ocular sensor within helmet visor to detect driver microsleep durations exceeding 1.5 seconds.",
        "Programmed automated GPS/GSM distress beacon transmitting exact coordinates when emergency timer expires."
      ],
      stats: [
        { value: "1", label: "Patent Filed", sub: "Official Indian Patent Office" },
        { value: "< 2.5s", label: "SOS Latency", sub: "GSM Beacon Dispatch" },
        { value: "100%", label: "Autonomous", sub: "Zero manual intervention needed" }
      ],
      dissection: {
        role: "Embedded Systems Engineer & Lead Inventor",
        duration: "SRM Innovation Lab",
        problem: "In India, over 50,000 two-wheeler fatalities occur annually due to delayed medical arrival after nighttime crashes and undetected driver fatigue. Conventional helmets provide passive impact absorption but zero communicative intelligence or proactive collision mitigation.",
        answer: "We converted the helmet into an active telemetry unit. By housing an ATmega controller, an MPU6050 accelerometer, an IR blink detector, and a SIM800L module, the helmet watches the rider's alert state. If a threshold collision or a microsleep spell occurs, an acoustic alert chirps; if unacknowledged within 15 seconds, distress SMS messages with live Google Maps coordinates are dispatched automatically.",
        evidence: [
          "assets/alertride-preview.svg",
          "assets/visual-embedded.svg"
        ],
        codeSnippet: `// Impact Interrupt Service Routine
void handleCollisionISR() {
  Vector3D gForce = mpu.getNormalizedAcceleration();
  if (gForce.magnitude() > CRITICAL_IMPACT_THRESHOLD_G) {
    alarmBuzzer.trigger();
    countdownTimer.start(15000); // 15s to cancel false positive
    gsmModule.queueEmergencyDispatch(gps.getLatitude(), gps.getLongitude());
  }
}`,
        links: {
          github: "https://github.com/kushagra-anand/alert-ride-helmet",
          patent: "Application #2026/CHENNAI (Status: Filed)"
        }
      }
    },
    {
      id: "cleanmap-route",
      stationNumber: "02",
      stationName: "WAYPOINT: BUILD",
      stationSubtitle: "FULL-STACK // CIVIC TELEMETRY",
      title: "CleanMap Platform",
      category: "FULL-STACK & GEOSPATIAL INTELLIGENCE",
      headline: "Crowdsourced waste geo-mapping platform transforming civic complaints into verifiable community cleanups.",
      badge: "3 HACKATHONS WON",
      color: "#0B24FF",
      tags: ["REACT & NODE", "POSTGIS GEOSPACIAL", "LEAFLET MAPS"],
      summary: "Eliminates municipal reporting black holes through peer-validated cleanup claims and live hotspot telemetry.",
      previewImage: "assets/cleanmap-preview.svg",
      bullets: [
        "Built responsive mapping canvas with geospatial clustering and heat-mapping of illegal waste deposits.",
        "Devised cryptographic photo-verification pipeline for volunteer squads claiming cleanup tasks.",
        "Awarded first place across 3 competitive collegiate and open hackathon circuits."
      ],
      stats: [
        { value: "1,420+", label: "Cleanups Validated", sub: "Verified via Photo Evidence" },
        { value: "3", label: "Hackathons Won", sub: "Top Podium Placements" },
        { value: "580+", label: "Volunteers", sub: "Decentralized Clean Squads" }
      ],
      dissection: {
        role: "Full-Stack Architect & Team Lead",
        duration: "12 Weeks (SRM Chennai Circuit)",
        problem: "Municipal complaint systems in Indian cities often operate as black holes: citizens submit photos of garbage dumps with zero tracking, and local youth willing to clean have no decentralized channel to coordinate or verify impact.",
        answer: "CleanMap eliminates bureaucratic intermediaries. Citizens pinpoint waste hotspots with geotagged images. Local volunteers claim cleanup tasks, mobilize squads, and submit post-cleanup photos. Verified community peer-voting unlocks civic leaderboard points and public telemetry badges.",
        evidence: [
          "assets/cleanmap-preview.svg",
          "assets/visual-fullstack.svg"
        ],
        codeSnippet: `// Geospatial Hotspot Clustering Query
SELECT id, ST_AsGeoJSON(geom) as coordinates, 
       COUNT(reports.id) as dump_density,
       SUM(CASE WHEN status = 'RESOLVED' THEN 1 ELSE 0 END) as resolved_count
FROM waste_pins
WHERE ST_DWithin(geom, ST_MakePoint($1, $2)::geography, 5000)
GROUP BY id, geom
HAVING COUNT(reports.id) >= 3;`,
        links: {
          github: "https://github.com/kushagra-anand/cleanmap",
          demo: "https://cleanmap.kushagra.dev"
        }
      }
    },
    {
      id: "dnaseq-route",
      stationNumber: "03",
      stationName: "WAYPOINT: SYSTEMS",
      stationSubtitle: "PERFORMANCE PROGRAMMING // UMEÅ",
      title: "DNASequenceSimilarity",
      category: "HIGH-PERFORMANCE C++ COMPUTING",
      headline: "Micro-benchmarked C++ k-mer similarity engine analyzing algorithmic inflection points from k=1 to 32.",
      badge: "OPTIMIZED C++20",
      color: "#8A9BFF",
      tags: ["MODERN C++20", "SIMD & CACHE", "BIOINFORMATICS"],
      summary: "Systematic performance study exposing the precise threshold where sparse hashing overtakes dense bitsets.",
      previewImage: "assets/dnaseq-preview.svg",
      bullets: [
        "Implemented zero-allocation direct bitset lookup for dense small k-mers (k ≤ 12) maximizing cache locality.",
        "Engineered sorted inverted index hashing for large sparse k-mers (k > 13) preventing exponential memory blowup.",
        "Conducted empirical mutation and benchmark tests under strict CPU cycle profiling at Umeå."
      ],
      stats: [
        { value: "1 – 32", label: "k-mer Support", sub: "Wide Genomic Parameter Spectrum" },
        { value: "k ≈ 12–13", label: "Crossover Point", sub: "Empirical Horizon Discovered" },
        { value: "O(N)", label: "Bitset Pass", sub: "Direct Indexing Speedup" }
      ],
      dissection: {
        role: "Systems Programmer",
        duration: "Performance Programming Coursework (Umeå)",
        problem: "Calculating Jaccard similarity across millions of biological DNA base pairs quickly degrades due to either catastrophic cache misses or exponential memory bloat depending on how k-mers are represented.",
        answer: "Designed a dual-path engine in C++20. For small k (1 to 12), an unrolled 4^k bitset provides direct O(1) indexing with zero heap allocations. For large k (13 to 32), an inverted hash table with sorted vector set intersection minimizes memory footprint. Thorough benchmarking pinpointed the exact crossover point where architecture and cache line saturation dictate the faster path.",
        evidence: [
          "assets/dnaseq-preview.svg",
          "assets/visual-cpp.svg"
        ],
        codeSnippet: `// Template-specialized k-mer dispatch
template<size_t K>
double computeJaccardSimilarity(const std::string& seqA, const std::string& seqB) {
  if constexpr (K <= 12) {
    // Fast path: Fixed size static bitset
    return BitsetStrategy<K>::calculate(seqA, seqB);
  } else {
    // Sparse path: Inverted sorted hash vector
    return SparseHashStrategy<K>::calculate(seqA, seqB);
  }
}`,
        links: {
          github: "https://github.com/kushagra-anand/DNASequenceSimilarity"
        }
      }
    },
    {
      id: "seefaa-route",
      stationNumber: "04",
      stationName: "WAYPOINT: INTELLIGENCE",
      stationSubtitle: "CLOUD ARCHITECTURE // SUPABASE",
      title: "SEEFAA Platform",
      category: "CLOUD ARCHITECTURE & SPACED REPETITION",
      headline: "Auth-gated CFA Level I preparation platform with granular knowledge-graph diagnostics.",
      badge: "PRODUCTION READY",
      color: "#FFC800",
      tags: ["SUPABASE RLS", "POSTGRESQL", "ADAPTIVE TESTING"],
      summary: "Adaptive testing portal providing cognitive telemetry and fraud-proof exam simulation for CFA candidates.",
      previewImage: "assets/seefaa-preview.svg",
      bullets: [
        "Designed modular relational database on Supabase Postgres with strict Row Level Security policies.",
        "Formulated real-time scoring telemetry highlighting candidate decay in high-weight topics like Financial Ethics.",
        "Delivered responsive brutalist interface built with Lovable and modern CSS tokens."
      ],
      stats: [
        { value: "10", label: "CFA Topics", sub: "Granular Sub-Discipline Tracking" },
        { value: "84.6%", label: "Target Pass", sub: "Simulated Cohort Accuracy" },
        { value: "100%", label: "Auth Isolation", sub: "Row Level Security Verification" }
      ],
      dissection: {
        role: "Full-Stack Architect",
        duration: "8 Weeks",
        problem: "Traditional CFA preparation tools are either expensive corporate subscription silos or static question PDFs that offer no actionable telemetry on why candidates fail retention across tricky topics like Ethical and Professional Standards.",
        answer: "SEEFAA breaks down full mock exams into micro-concept analytics. Utilizing Supabase Row Level Security ensures candidate progress and proprietary test questions cannot be leaked. Adaptive spaced repetition algorithms calculate forgetting curves and re-surface problematic questions during subsequent mock sessions.",
        evidence: [
          "assets/seefaa-preview.svg",
          "assets/visual-data.svg"
        ],
        codeSnippet: `-- Row Level Security Policy for Candidate Mock Sessions
CREATE POLICY "Candidates access only own mock responses" 
ON candidate_answers 
FOR ALL 
TO authenticated 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);`,
        links: {
          github: "https://github.com/kushagra-anand/seefaa",
          demo: "https://seefaa.lovable.app"
        }
      }
    },
    {
      id: "recycling-pant-route",
      stationNumber: "05",
      stationName: "TERMINUS: UMEÅ",
      stationSubtitle: "HCAI & ROBOTICS // NORTH SWEDEN",
      title: "Recycling Pant-Machine",
      category: "HUMAN-CENTERED AI & ROBOTIC SYSTEMS",
      headline: "Reverse vending robot leveraging multi-modal sensory inputs for contamination-free circular recycling.",
      badge: "HCAI GROUP 1 AWARD",
      color: "#27C93F",
      tags: ["SENSOR FUSION", "HUMAN-CENTERED AI", "ROBOTICS"],
      summary: "Multi-sensor robotic sorting system tackling contamination in Scandinavian reverse vending machines.",
      previewImage: "assets/pantmachine-preview.svg",
      bullets: [
        "Engineered optical + inductive sensor fusion to classify aluminum cans, PET bottles, and foreign contaminants.",
        "Incorporated load-cell weight sensors and ambient humidity monitoring to predict mold emergence inside storage bins.",
        "Designed human-centered feedback screen providing clear visual cues for correct deposit orientation."
      ],
      stats: [
        { value: "3", label: "Sensory Inputs", sub: "Optical, Inductive, Strain-Gauge" },
        { value: "Group 1", label: "HCAI Commendation", sub: "Umeå University Robotics" },
        { value: "99.2%", label: "Sorting Accuracy", sub: "Zero Contamination Rate" }
      ],
      dissection: {
        role: "Robotics & HCAI Engineer",
        duration: "Autumn 2026 (Umeå University)",
        problem: "Sweden's 'pant' system is world-renowned, yet suburban reverse-vending units suffer frequent maintenance shutdowns due to contaminated items, sticky beverage residues, and unmonitored mold build-up in closed storage bins.",
        answer: "Developed a comprehensive hardware-in-the-loop robotic sorting concept. The system fuses inductive metal sensing with optical spectral classification at the intake chute. Meanwhile, strain-gauge load cells track bin mass and relative humidity sensors execute predictive maintenance forecasting mold hazards before operators have to intervene manually.",
        evidence: [
          "assets/pantmachine-preview.svg",
          "assets/visual-robotics.svg"
        ],
        codeSnippet: `// Multi-Sensor Fusion Classifier Routine
DepositClass classifyItem(SensorSnapshot s) {
  if (s.inductiveVoltage > METAL_THRESHOLD_VOLT) {
    return CAN_ALUMINUM;
  }
  if (s.opticalSpectralRatio > PET_TRANSPARENCY_MIN && s.weightGrams < MAX_EMPTY_BOTTLE_WEIGHT) {
    return BOTTLE_PET;
  }
  return CONTAMINANT_REJECT;
}`,
        links: {
          github: "https://github.com/kushagra-anand/recycling-pant-machine"
        }
      }
    }
  ],

  // Visuals Section 05 — Signals From the Journey (8 Hover Zones)
  visuals: [
    {
      id: "aiml",
      code: "SIG-01",
      skill: "AI / MACHINE LEARNING",
      detail: "Deep Neural Networks, Tensor Computations & Optimization",
      image: "assets/visual-aiml.svg",
      station: "RESEARCH LAB"
    },
    {
      id: "cv",
      code: "SIG-02",
      skill: "COMPUTER VISION",
      detail: "Spectral Feature Tracking & Real-Time Object Localization",
      image: "assets/visual-cv.svg",
      station: "PERCEPTION DECK"
    },
    {
      id: "robotics",
      code: "SIG-03",
      skill: "ROBOTICS & HCAI",
      detail: "Actuation, Kinematic Sensing & Human-Robot Interaction",
      image: "assets/visual-robotics.svg",
      station: "UMEÅ HCAI"
    },
    {
      id: "fullstack",
      code: "SIG-04",
      skill: "FULL-STACK ARCHITECTURE",
      detail: "Distributed Microservices, Geo-Querying & Reactive Frontends",
      image: "assets/visual-fullstack.svg",
      station: "PRODUCTION ENGINE"
    },
    {
      id: "cpp",
      code: "SIG-05",
      skill: "C++ PERFORMANCE",
      detail: "SIMD Vectorization, Cache Coherence & Low-Level Systems",
      image: "assets/visual-cpp.svg",
      station: "SYSTEMS CORE"
    },
    {
      id: "embedded",
      code: "SIG-06",
      skill: "EMBEDDED SYSTEMS",
      detail: "Microcontrollers, Sensor Fusion, I2C / SPI Buses & IoT SOS",
      image: "assets/visual-embedded.svg",
      station: "HARDWARE FLIGHT"
    },
    {
      id: "uiux",
      code: "SIG-07",
      skill: "UI / UX CRAFT",
      detail: "Brutalist Design Systems, Micro-Interactions & Motion GSAP",
      image: "assets/visual-uiux.svg",
      station: "DESIGN INTERFACE"
    },
    {
      id: "data",
      code: "SIG-08",
      skill: "DATA ENGINEERING",
      detail: "High-Throughput Pipelines, Postgres RLS & Time-Series Telemetry",
      image: "assets/visual-data.svg",
      station: "PIPELINE TERMINAL"
    }
  ],

  // Contact Section 06 — Final Destination
  contact: {
    heading: "FINAL DESTINATION",
    subheading: "JOURNEY TERMINAL: CONNECT WITH KUSHAGRA",
    email: "anandkushagra1@gmail.com",
    subject: "Hello Kushagra // Chennai ➔ Umeå Project Connection",
    body: "Hi Kushagra,\n\nI was exploring your portfolio and followed your journey from SRM Chennai to Umeå. I'd love to chat about your projects and discuss...",
    locationNotice: "CURRENT STATION: UMEÅ UNIVERSITY, SWEDEN (LAT 63.8258° N)",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/kushagra-anand", handle: "in/kushagra-anand" },
      { name: "GitHub", url: "https://github.com/kushagra-anand", handle: "github.com/kushagra-anand" },
      { name: "Instagram", url: "https://instagram.com/kushagra_anand", handle: "@kushagra_anand" },
      { name: "Email", url: "mailto:anandkushagra1@gmail.com?subject=Hello%20Kushagra%20%2F%2F%20Chennai%20%E2%9E%94%20Ume%C3%A5%20Connection", handle: "anandkushagra1@gmail.com" }
    ]
  },

  // Footer & Legal
  footer: {
    signature: "Kushagra Anand",
    routeClosing: "CHENNAI (13.08° N) ➔ UMEÅ (63.82° N) // 6,700 KM OF SYSTEMS CRAFT.",
    closingNote: "From the humid hackathons of SRM to the sub-zero robotics labs of northern Sweden, every project is built to endure.",
    copyright: "© 2026 KUSHAGRA ANAND. ZERO TRACKING. 100% STATIC RUNTIME.",
    links: [
      { name: "PRIVACY POLICY", url: "privacy.html" },
      { name: "TERMS OF USE", url: "terms.html" }
    ]
  }
};

// Export for module or browser window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONTENT;
}

