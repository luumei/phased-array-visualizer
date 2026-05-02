    // Self-executing anonymous function for watermark
    (function () {
      const encoded = "cGhhc2VkLWFycmF5LXNpbXVsYXRvci5jb20="; // phased-array-simulator.com
      const crash = () => { while (true) console.log("⚠️ Manipulation erkannt!"); };
      let host = null;
      function createWatermark() {
        if (host && document.body.contains(host)) document.body.removeChild(host);
        host = document.createElement("div");
        host.style.cssText = "position:fixed;bottom:5px;right:5px;z-index:2147483647;pointer-events:none;";
        const shadow = host.attachShadow({ mode: "closed" });
        const canvas = document.createElement("canvas");
        canvas.width = 180; canvas.height = 30;
        const ctx = canvas.getContext("2d");
        ctx.globalAlpha = 0.3; ctx.font = "14px Arial"; ctx.fillStyle = "#999";
        ctx.fillText(atob(encoded), 5, 20);
        shadow.appendChild(canvas);
        document.body.appendChild(host);
      }
      function verify() {
        try {
          if (!host || !document.body.contains(host) || host.getBoundingClientRect().width === 0) crash();
        } catch { crash(); }
      }
      createWatermark();
      setInterval(createWatermark, 5000);
      new MutationObserver(verify).observe(document.body, { childList: true, subtree: true, attributes: true });
    })();

    // Translation Data
    const translations = {
      de: {
        "title": "Free 3D Phased Array Simulator",
        "view-size": "3D-Ansicht:",
        "fullscreen-3d": "3D Vollbild",
        "visualization-settings": "Visualisierungseinstellungen",
        "antenna-type": "Antennentyp:",
        "isotropic": "Isotrop",
        "patch": "Patch (Direktional)",
        "steering-direction": "Steuerungsrichtung (Beam Steering)",
        "azimuth": "Azimut (φ):",
        "elevation": "Elevation (θ):",
        "observation-point": "Beobachtungspunkt",
        "distance": "Entfernung:",
        "sync-observation": "Beobachtung = Steuerung:",
        "show-observation-point": "Beobachtungspunkt anzeigen:",
        "show-steering-point": "Steuerungspunkt anzeigen:",
        "antenna-array-config": "Antennenarray-Konfiguration",
        "waves": "Wellen:",
        "vectors": "Vektoren:",
        "far-field-pattern": "Feldmuster:",
        "normalize-pattern": "Muster normalisieren:",
        "mutual-coupling": "Gegenseitige Kopplung:",
        "coupling-strength": "Kopplungsschätzung:",
        "calculation-method-label": "Feldmodell:",
        "exact-method": "Subpatch / Nahfeld",
        "approximation-method": "Fraunhofer / Fernfeld",
        "pattern-display": "Musterdarstellung:",
        "hemisphere": "Farbkodierte Hemisphäre",
        "3d-shape": "Keulenform (3D-Magnitude)",
        "subpatch-density": "Subpatch-Dichte:",
        "total-field-magnitude": "Betrag des Gesamtfeldes:",
        "array-factor": "Gesamtfeld (Array-Faktor)",
        "array-factor-desc": "Das gezeigte Gesamtfeld ist ein skalares Demonstrationsmodell für die Superposition der Antennenelemente. Im Fernfeld entspricht es dem üblichen Elementpattern-mal-Array-Faktor-Ansatz; im Nah-/Übergangsbereich nutzt die Simulation eine diskrete Huygens-/Subpatch-Näherung. Es ist keine vollständige FEM/MoM-Lösung, weil die echte Stromverteilung und Kopplung nur vereinfacht modelliert werden.",
        "formula-exact": "Diskrete Huygens-/Stromquellen-Näherung (nicht volle FEM-Exaktheit):",
        "formula-approx": "Fernfeld-Approximation (Fraunhofer / Array-Faktor):",
        "parameters": "Parameter:",
        "param-r": "$\\hat{r}$: Beobachtungsrichtung (vom Array-Ursprung)",
        "param-r-local": "$\\hat{r}_{\\text{local},p}$: Lokale Beobachtungsrichtung (vom Subpatch $p$)",
        "param-s": "$\\hat{s}$: Steuerungsrichtung",
        "param-rn": "$\\vec{r}_n$: Position des $n$-ten Antennen-Mittelpunkts",
        "param-rnp": "$\\vec{r}_{n,p}$: Position des $p$-ten Subpatchs der $n$-ten Antenne",
        "param-k": "$k$: Wellenzahl ($2\\pi/\\lambda$)",
        "param-Fp": "$F_p(\\hat{r}_{\\text{local},p})$: Richtcharakteristik des Subpatchs $p$",
        "param-Fhatr": "$F(\\hat{r})$: Globale Richtcharakteristik der Einzelelemente",
        "param-Np": "$N_P$: Anzahl der Subpatches pro Antenne",
        "param-w": "$w_{n,p} \\propto J(\\vec r_{n,p})\\Delta S_p$: Gewicht des Subpatchs durch lokale Stromdichte und Fläche",
        "subpatch-accuracy-note": "Wichtig: Die Subpatch-Summe ist eine Huygens-/Stromquellen-Näherung. Sie wird genauer, wenn die Subpatches kleiner werden und wenn die lokale Stromverteilung $J(\\vec r)$ bekannt ist. In dieser Demo wird $J$ stark vereinfacht; echte Patch-Ströme, Substrat und Kopplung müssten mit FEM/MoM oder Messdaten bestimmt werden.",
        "observation-info": "Beobachtungspunkt-Info:",
        "direction": "Richtung:",
        "exact-field-real-part": "Re(A) Subpatch:",
        "approx-field-real-part": "Re(A) Approximiert:",
        "required-steering-phases": "Erforderliche Phasenverschiebung zur Strahlsteuerung pro Antenne:",
        "approximation-note-text": "Die Subpatch-Näherung verwendet echte Abstände und Phasen zu vielen kleinen Quellen. Sie ist deshalb näher am Nah-/Fresnelbereich als der Fraunhofer-Array-Faktor, aber nicht wirklich &quot;exakt&quot;: Für eine reale Patch-Antenne bräuchte man $J(\\vec r)$ aus FEM/MoM/Messung und eine Kopplungsmatrix zwischen Elementen. Faustregel: unter etwa $\\lambda/4$ Elementabstand ist Kopplung meist stark; ab etwa $\\lambda/2$ ist sie oft deutlich kleiner und der Array-Faktor brauchbarer.",
        "math-foundations-title": "Mathematische Grundlagen",
        "math-foundations-desc-helmholtz": "Die Berechnung des Feldes basiert auf grundlegenden Prinzipien der Wellenausbreitung, die durch die Helmholtz-Gleichung beschrieben werden.",
        "helmholtz-derivation-title": "Herleitung aus der Helmholtz-Gleichung",
        "helmholtz-source-text": "Die skalare Helmholtz-Gleichung mit einer Quellverteilung $\\rho(\\vec{r})$ ist gegeben durch:",
        "helmholtz-source-eq": "$$(\\nabla^2 + k^2) \\phi(\\vec{r}) = -\\rho(\\vec{r})$$",
        "green-intro-text": "Zuerst wird die Greensche Funktion allgemein als Antwort auf eine Punktquelle an der Quellposition $\\vec{r}'$ definiert. Dabei hängt sie im allgemeinen Fall von zwei Punkten ab: Beobachtungspunkt $\\vec{r}$ und Quellpunkt $\\vec{r}'$:",
        "green-eq": "$$(\\nabla^2 + k^2) G(\\vec{r}, \\vec{r}') = -\\delta(\\vec{r} - \\vec{r}')$$",
        "superposition-intro-text": "Die Lösung für die ursprüngliche Gleichung ergibt sich dann durch die Überlagerung (Integration) der Antworten auf alle Punktquellen, aus denen die Verteilung $\\rho(\\vec{r}')$ zusammengesetzt ist:",
        "superposition-eq": "$$\\phi(\\vec{r}) = \\int G(\\vec{r}, \\vec{r}') \\rho(\\vec{r}') \\, d^3r'$$",
        "free-green-intro-text": "Für den freien Raum bzw. ein homogenes Medium mit konstanten Koeffizienten ist der Helmholtz-Operator translationsinvariant. Deshalb hängt die Greensche Funktion nur vom Abstand zwischen Beobachtungs- und Quellpunkt ab:",
        "free-green-eq": "$$G(\\vec{r}, \\vec{r}') = \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|}$$",
        "show-this-by-text": "Man kann dies zeigen, indem man:",
        "show-this-li-1": "die Gleichung in Kugelkoordinaten bezüglich des radialen Abstands $R = |\\vec{r} - \\vec{r}'|$ schreibt,",
        "show-this-li-2": "die Distributionseigenschaft der Dirac-Quelle beachtet,",
        "show-this-li-3": "und eine ausgehende Kugelwelle als physikalisch sinnvolle Lösung wählt.",
        "total-field-solution-text": "Die Gesamtfeldlösung ergibt sich durch Superposition aller Quellpunkte. Allgemein schreibt man das Integral mit $G(\\vec{r},\\vec{r}')$; im translationsinvarianten Freiraum wird daraus die Faltungsform:",
        "total-field-solution-eq": "$$\\phi(\\vec{r}) = \\int \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|} \\rho(\\vec{r}') \\, d^3r'$$",
        "application-to-surfaces-title": "Anwendung auf Antennenflächen",
        "application-to-surfaces-text": "Für eine Antennenfläche $S$ wird die äquivalente Quelle über die Fläche verteilt. Der Beobachtungspunkt ist $\\vec{R}$, der Quellpunkt auf der Fläche ist $\\vec{r}'$. Im Freiraum kann jeder Flächenpunkt mit derselben verschobenen Greenschen Funktion ausgewertet werden:",
        "application-to-surfaces-eq": "$$A(\\vec{R}) \\propto \\int_S J(\\vec{r}')\\,F(\\hat{u})\\,\\frac{e^{ik|\\vec{R}-\\vec{r}'|}}{|\\vec{R}-\\vec{r}'|}\\,dS'$$",
        "application-to-surfaces-conclusion": "Hierbei beschreibt $J(\\vec r')$ die angenommene lokale äquivalente Strom-/Quellverteilung und $F(\\hat u)$ eine Richtungsgewichtung. Diese einfache Form setzt Freiraum bzw. ein homogenes Medium voraus. Mit Wänden, Groundplanes, Dielektrika oder ortsabhängigen Materialwerten müsste man allgemein $G(\\vec R,\\vec r')$ verwenden und könnte nicht einfach nur $|\\vec R-\\vec r'|$ einsetzen.",
        "distance-approx-title": "Abstandsapproximation (Fernfeld)",
        "distance-approx-intro": "Im Fernfeld können wir den Abstand von einem Beobachtungspunkt $\\vec{R}$ zu einem Antennenelement bei $\\vec{r}_n$ annähern. Der exakte Abstand ist $|\\vec{R} - \\vec{r}_n|$. Wenn $R = |\\vec{R}|$ der Abstand vom Ursprung zum Beobachtungspunkt ist und $\\hat{d} = \\vec{R}/R$ die Beobachtungsrichtung ist, dann gilt:",
        "distance-approx-exact-eq": "$$\\begin{aligned}\n|\\vec{R}-\\vec{r}_n| &= \\sqrt{Q_n}\\\\\nQ_n &= R^2 - 2R(\\hat{d}\\cdot\\vec{r}_n) + |\\vec{r}_n|^2\n\\end{aligned}$$",
        "distance-approx-explanation": "Für große Distanzen $R \\gg |\\vec{r}_n|$ können wir eine Taylor-Entwicklung verwenden und Terme höherer Ordnung vernachlässigen (Fraunhofer-Approximation). Dies führt zur Abstandsapproximation:",
        "distance-approx-approx-eq": "$$|\\vec{R} - \\vec{r}_n| \\approx R - (\\hat{d} \\cdot \\vec{r}_n)$$",
        "phase-delay-title": "Phasenverschiebung durch Wegunterschied",
        "phase-delay-eq": "$$\\Delta l_n = -(\\hat{d} \\cdot \\vec{r}_n) \\quad\\Rightarrow\\quad \\phi_n = -k(\\hat{d} \\cdot \\vec{r}_n) \\text{ mit } k = \\frac{2\\pi}{\\lambda}$$",
        "beam-steering-explained": "Strahlformung erklärt",
        "beam-steering-desc": "Strahlformung ermöglicht die elektronische Ausrichtung des Hauptstrahls. Dies geschieht durch gezielte Phasenverschiebungen an jedem Antennenelement. Um den Strahl in eine Richtung $\\hat{s}$ zu lenken, muss die Phasenverschiebung an der Antenne $n$ um $k(\\vec{r}_n \\cdot \\hat{s})$ vorgezogen werden.",
        "steering-phase-formula": "Lenkphase (Steering Phase):",
        "combined-element-response-formula": "Kombinierte Elementarantwort:",
        "steering-tip": "Wenn Sie den Strahl in eine bestimmte Beobachtungsrichtung lenken möchten, wählen Sie die Lenkrichtung $\\hat{s}$ gleich der Beobachtungsrichtung $\\hat{d}$. Die erforderliche Phasenverschiebung ist dann genau die inverse der durch den Wegunterschied am Beobachtungspunkt verursachten Phase.",
        "fourier-transform-connection": "Sphärische Fernfeldtransformation (Fourier-/Spherical-FFT-Idee)",
        "fourier-transform-desc": "Im Fraunhofer-Fernfeld ist das Winkelmuster näherungsweise die räumliche Fourier-Transformation der Apertur-/Stromverteilung. Bei einer kugelförmigen Auswertung spricht man genauer von einer sphärischen Fernfeldtransformation bzw. von Kugelflächen-/spherical-harmonics-Darstellungen. Eine einfache inverse FFT rekonstruiert nicht automatisch das komplette Nahfeld, sondern nur unter starken Annahmen die Aperturbelegung.",
        "array-factor-fourier": "Array-Faktor als räumliche Fourier-Transformation:",
        "inverse-fourier":"Eine inverse Fourier-/sphärische Transformation kann Apertur- oder Modenkoeffizienten rekonstruieren, aber echte Nahfelder benötigen zusätzlich Amplitude, Phase, Polarisation, Randbedingungen und die evaneszenten Anteile.",
        "symbol-definitions": "Symbol-Definitionen",
        "show-symbols": "Klicken Sie hier, um die Symbol-Definitionen anzuzeigen",
        "def-A": "Das gesamte Feld (Array-Faktor), eine normalisierte Darstellung ohne Absolutamplituden oder physikalische Konstanten.",
        "def-rn": "Positionsvektor der $n$-ten Antenne",
        "def-d": "Beobachtungsrichtung (Einheitsvektor)",
        "def-s": "Lenkrichtung (Steering Direction, Einheitsvektor)",
        "def-k": "Wellenzahl ($2\\pi/\\lambda$), wobei $\\lambda$ die Wellenlänge ist",
        "def-phi-n": "Phasenverzögerung aufgrund des Wegunterschieds von Antenne $n$ zum Beobachtungspunkt",
        "def-phi-n-steer": "Zusätzliche Phasenverschiebung an Antenne $n$ für die Strahlformung (Steering Phase)",
        "def-Fp": "Lokale Richtungs-/Quellengewichtung des Subpatchs im vorgeschriebenen Stromintegral.",
        "def-Fhatr": "Fernfeld-Elementpattern, das im Fraunhofer-Ansatz mit dem Array-Faktor multipliziert wird.",
        "def-An": "Amplitudengewichtung für Antenne $n$",
        "def-n": "Gesamtzahl der Antennenelemente im Array",
        "def-Np": "Anzahl der Subpatches pro Antenne",
        "def-lambda": "Wellenlänge des Signals",
        "def-rnp": "Position vector of the $p$-th subpatch of the $n$-th antenna",
        "def-G": "Green’s function: the general kernel between observation point and source point. In free space, $G(\\vec r,\\vec r')=G(|\\vec r-\\vec r'|)$.",
        "def-r": "General observation point in the Green’s-function derivation.",
        "def-rprime": "General source point or integration point.",
        "def-R": "Observation point in the antenna/array model.",
        "def-S": "Antenna surface and its surface element at the source point $\\vec r'$.",
        "def-J": "Assumed local equivalent current or source distribution on the antenna surface.",
        "def-rho": "Volume source distribution in the general Helmholtz equation.",
        "def-uhat": "Local radiation/observation direction from source point to observation point; used for directional weighting.",
        "def-G": "Greensche Funktion: allgemeiner Kern zwischen Beobachtungspunkt und Quellpunkt. Im Freiraum gilt $G(\\vec r,\\vec r')=G(|\\vec r-\\vec r'|)$.",
        "def-r": "Allgemeiner Beobachtungspunkt in der Greenschen-Funktion-Herleitung.",
        "def-rprime": "Allgemeiner Quellpunkt bzw. Integrationspunkt.",
        "def-R": "Beobachtungspunkt im Antennen-/Array-Modell.",
        "def-S": "Antennenfläche und Flächenelement am Quellpunkt $\\vec r'$.",
        "def-J": "Angenommene lokale äquivalente Strom- oder Quellverteilung auf der Antennenfläche.",
        "def-rho": "Volumen-Quellverteilung in der allgemeinen Helmholtz-Gleichung.",
        "def-uhat": "Lokale Abstrahl-/Beobachtungsrichtung vom Quellpunkt zum Beobachtungspunkt; benutzt für Richtungsgewichtung."
      },
      en: {
        "title": "Free 3D Phased Array Simulator",
        "view-size": "3D view size:",
        "fullscreen-3d": "Fullscreen 3D",
        "visualization-settings": "Visualization Settings",
        "antenna-type": "Antenna Type:",
        "isotropic": "Isotropic",
        "patch": "Patch (Directional)",
        "steering-direction": "Steering Direction (Beam Steering)",
        "azimuth": "Azimuth (φ):",
        "elevation": "Elevation (θ):",
        "observation-point": "Observation Point",
        "distance": "Distance:",
        "sync-observation": "Observation = Steering:",
        "show-observation-point": "Show Observation Point:",
        "show-steering-point": "Show Steering Point:",
        "antenna-array-config": "Antenna array configuration",
        "waves": "Waves:",
        "vectors": "Vectors:",
        "far-field-pattern": "Field Pattern:",
        "normalize-pattern": "Normalize Pattern:",
        "mutual-coupling": "Mutual coupling:",
        "coupling-strength": "Coupling estimate:",
        "calculation-method-label": "Field model:",
        "exact-method": "Prescribed-current Huygens model",
        "approximation-method": "Fraunhofer far field",
        "pattern-display": "Pattern Display:",
        "hemisphere": "Color-Coded Hemisphere",
        "3d-shape": "Lobe Shape (3D Magnitude)",
        "subpatch-density": "Subpatch Density:",
        "total-field-magnitude": "Total Field Magnitude:",
        "array-factor": "Total Field / Array Response",
        "array-factor-desc": "The shown field is a scalar demonstration of antenna-element superposition. The subpatch mode evaluates a discretized radiation integral using prescribed equivalent source weights. The Fraunhofer mode uses the far-field array-factor approximation. This is not a full-wave FEM or MoM solver. However, the optional mutual-coupling switch adds a small MoM-inspired matrix model at element level: nearby elements modify the complex excitation currents before the radiation integral is evaluated. The coupling slider is calibrated like a rough nearest-neighbour $S_{21}$ magnitude in dB, not like a measured material parameter. In subpatch mode, each subpatch still receives a prescribed local current shape.",
        "formula-exact": "Discretized radiation integral with prescribed equivalent currents:",
        "formula-approx": "Fraunhofer far-field approximation / array factor:",
        "parameters": "Parameters:",
        "param-r": "$\\hat{r}$: Observation direction (from array origin)",
        "param-r-local": "$\\hat{r}_{\\text{local},p}$: Local observation direction (from subpatch $p$)",
        "param-s": "$\\hat{s}$: Steering direction",
        "param-rn": "$\\vec{r}_n$: Position of antenna $n$'s center",
        "param-rnp": "$\\vec{r}_{n,p}$: Position of subpatch $p$ of antenna $n$",
        "param-k": "$k$: Wave number ($2\\pi/\\lambda$)",
        "param-Fp": "$F_p(\\hat{u}_{n,p})$: directional weighting of subpatch $p$",
        "param-Fhatr": "$F(\\hat{r})$: Global directional characteristic of individual elements",
        "param-Np": "$N_P$: Number of subpatches per antenna",
        "param-w": "$w_{n,p} \\propto J(\\vec r_{n,p})\\Delta S_p$: subpatch weight from local current density and area",
        "subpatch-accuracy-note": "Important: the subpatch sum is a Huygens/current-source approximation. It improves when subpatches get smaller and when the local current distribution $J(\\vec r)$ is known. In this demo $J$ is heavily simplified. The optional coupling model modifies each antenna element current, but it is still not a full-wave solution; real patch currents, substrate effects and strong mutual coupling require FEM/MoM/FDTD or measurements.",
        "observation-info": "Observation Point Info:",
        "direction": "Direction:",
        "exact-field-real-part": "Re(A) Huygens model:",
        "approx-field-real-part": "Re(A) Fraunhofer:",
        "required-steering-phases": "Required Phase Shift for Beam Steering per Antenna:",
        "approximation-note-text": "The subpatch approximation uses real distances and phases to many small sources. It is therefore closer to the finite-distance observation region than the Fraunhofer array factor, but it is not truly &quot;exact&quot;: a real patch antenna would require $J(\\vec r)$ from FEM/MoM/measurement and a coupling matrix between elements. Rule of thumb: below about $\\lambda/4$ element spacing coupling is usually strong; around $\\lambda/2$ it is often much smaller and the array-factor model becomes more usable.",
        "math-foundations-title": "Mathematical Foundations",
        "math-foundations-desc-helmholtz": "The calculation of the field is based on fundamental principles of wave propagation, which are described by the Helmholtz equation.",
        "helmholtz-derivation-title": "Derivation from the Helmholtz Equation",
        "helmholtz-source-text": "The scalar Helmholtz equation with a source distribution $\\rho(\\vec{r})$ is given by:",
        "helmholtz-source-eq": "$$(\\nabla^2 + k^2) \\phi(\\vec{r}) = -\\rho(\\vec{r})$$",
        "green-intro-text": "First, the Green’s function is defined generally as the response to a point source at the source position $\\vec{r}'$. In the general case it depends on two points: the observation point $\\vec{r}$ and the source point $\\vec{r}'$:",
        "green-eq": "$$(\\nabla^2 + k^2) G(\\vec{r}, \\vec{r}') = -\\delta(\\vec{r} - \\vec{r}')$$",
        "superposition-intro-text": "The solution to the original equation is then obtained by the superposition (integration) of the responses to all point sources that make up the distribution $\\rho(\\vec{r}')$:",
        "superposition-eq": "$$\\phi(\\vec{r}) = \\int G(\\vec{r}, \\vec{r}') \\rho(\\vec{r}') \\, d^3r'$$",
        "free-green-intro-text": "For free space, or for a homogeneous medium with constant coefficients, the Helmholtz operator is translation-invariant. Therefore the Green’s function depends only on the distance between observation and source point:",
        "free-green-eq": "$$G(\\vec{r}, \\vec{r}') = \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|}$$",
        "show-this-by-text": "This can be shown by:",
        "show-this-li-1": "writing the equation in spherical coordinates with respect to the radial distance $R = |\\vec{r} - \\vec{r}'|$,",
        "show-this-li-2": "noting the distributional property of the Dirac source,",
        "show-this-li-3": "and choosing an outgoing spherical wave as a physically meaningful solution.",
        "total-field-solution-text": "The total field is obtained by superposing all source points. In general the integral is written with $G(\\vec{r},\\vec{r}')$; in translation-invariant free space this becomes the convolution form:",
        "total-field-solution-eq": "$$\\phi(\\vec{r}) = \\int \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|} \\rho(\\vec{r}') \\, d^3r'$$",
        "application-to-surfaces-title": "Application to Antenna Surfaces",
        "application-to-surfaces-text": "For an antenna surface $S$, the equivalent source is distributed over the surface. The observation point is $\\vec{R}$ and the source point on the surface is $\\vec{r}'$. In free space, each surface point can be evaluated with the same shifted Green’s function:",
        "application-to-surfaces-eq": "$$A(\\vec{R}) \\propto \\int_S J(\\vec{r}')\\,F(\\hat{u})\\,\\frac{e^{ik|\\vec{R}-\\vec{r}'|}}{|\\vec{R}-\\vec{r}'|}\\,dS'$$",
        "application-to-surfaces-conclusion": "Here, $J(\\vec r')$ is the assumed local equivalent current/source distribution and $F(\\hat u)$ is a directional weighting. This simple form assumes free space or a homogeneous medium. With walls, ground planes, dielectric layers, or spatially varying material properties, one must use the general kernel $G(\\vec R,\\vec r')$ instead of only the distance $|\\vec R-\\vec r'|$.",
        "distance-approx-title": "Distance Approximation (Far-Field)",
        "distance-approx-intro": "In the far-field, we can approximate the distance from an observation point $\\vec{R}$ to an antenna element at $\\vec{r}_n$. The exact distance is $|\\vec{R} - \\vec{r}_n|$. If $R = |\\vec{R}|$ is the distance from the origin to the observation point and $\\hat{d} = \\vec{R}/R$ is the observation direction, then:",
        "distance-approx-exact-eq": "$$\\begin{aligned}\n|\\vec{R}-\\vec{r}_n| &= \\sqrt{Q_n}\\\\\nQ_n &= R^2 - 2R(\\hat{d}\\cdot\\vec{r}_n) + |\\vec{r}_n|^2\n\\end{aligned}$$",
        "distance-approx-explanation": "For large distances $R \\gg |\\vec{r}_n|$, we can use a Taylor expansion and neglect higher-order terms (Fraunhofer approximation). This leads to the distance approximation:",
        "distance-approx-approx-eq": "$$|\\vec{R} - \\vec{r}_n| \\approx R - (\\hat{d} \\cdot \\vec{r}_n)$$",
        "phase-delay-title": "Phase Delay from Path Difference",
        "phase-delay-eq": "$$\\Delta l_n = -(\\hat{d} \\cdot \\vec{r}_n) \\quad\\Rightarrow\\quad \\phi_n = -k(\\hat{d} \\cdot \\vec{r}_n) \\text{ with } k = \\frac{2\\pi}{\\lambda}$$",
        "beam-steering-explained": "Beam Steering Explained",
        "beam-steering-desc": "Beamforming enables electronic steering of the main beam. This is achieved by applying specific phase shifts to each antenna element. To steer the beam in a direction $\\hat{s}$, the phase at antenna $n$ must be advanced by $k(\\vec{r}_n \\cdot \\hat{s})$.",
        "steering-phase-formula": "Steering Phase:",
        "combined-element-response-formula": "Combined Element Response:",
        "steering-tip": "If you wish to steer the beam in a specific observation direction, choose the steering direction $\\hat{s}$ equal to the observation direction $\\hat{d}$. The required phase shift is then exactly the inverse of the phase caused by the path difference at the observation point.",
        "fourier-transform-connection": "Spatial Fourier transform and far-field relation",
        "fourier-transform-desc": "In the Fraunhofer far field, the angular radiation pattern is proportional to the spatial Fourier transform of the aperture or current distribution. For a sampled array this becomes a discrete spatial Fourier transform. For full spherical prescribed-current Huygens-style measurements one often uses prescribed-current Huygens-style to far-field transformation or spherical-wave expansion; this is not the same as a normal time-domain FFT.",
        "array-factor-fourier": "Array factor as a discrete spatial Fourier transform:",
        "inverse-fourier":"The inverse operation is closer to an inverse spatial Fourier transform or modal reconstruction. It can estimate aperture/excitation information only under assumptions; it does not automatically reconstruct the full reactive 3D field, because evanescent components, polarization and boundary conditions matter.",
        "practical-workflow-title": "Practical workflow: solve sources first, then combine fields",
        "practical-workflow-desc": "The method shown here is the second step: it computes fields from known or assumed equivalent currents. In real antenna projects, those sources are often obtained first from measurement or a full-wave method, then many array elements are combined quickly by superposition.",
        "practical-workflow-li-1": "FEM or FDTD solve fields in a volume; Method of Moments (MoM) usually solves surface currents through an integral equation.",
        "practical-workflow-li-2": "Once $J(\\vec r)$ is known, the radiation integral can be evaluated directly without solving MoM again.",
        "practical-workflow-li-3": "For close arrays, mutual coupling and changed element currents still matter. As a rough rule, $\\lambda/2$ spacing is much safer than $\\lambda/4$ for weak coupling.",
        "symbol-definitions": "Symbol Definitions",
        "show-symbols": "Click here to show symbol definitions",
        "def-A": "Total field (array factor), a normalized representation without absolute amplitudes or physical constants.",
        "def-rn": "Position vector of the $n$-th antenna",
        "def-d": "Observation direction (unit vector)",
        "def-s": "Steering direction (unit vector)",
        "def-k": "Wave number ($2\\pi/\\lambda$)",
        "def-phi-n": "Phase delay due to path difference from antenna $n$ to the observation point",
        "def-phi-n-steer": "Additional phase shift at antenna $n$ for beamforming (Steering Phase)",
        "def-Fp": "Directional/source weighting of subpatch $p$ in the prescribed-current radiation integral",
        "def-Fhatr": "Far-field element pattern used in the Fraunhofer approximation",
        "def-An": "Amplitude weight for antenna $n$",
        "def-n": "Total number of antenna elements in the array",
        "def-Np": "Number of subpatches per antenna",
        "def-lambda": "Wavelength of the signal",
        "def-rnp": "Position vector of the $p$-th subpatch of the $n$-th antenna",
        "def-G": "Green’s function: the general kernel between observation point and source point. In free space, $G(\\vec r,\\vec r')=G(|\\vec r-\\vec r'|)$.",
        "def-r": "General observation point in the Green’s-function derivation.",
        "def-rprime": "General source point or integration point.",
        "def-R": "Observation point in the antenna/array model.",
        "def-S": "Antenna surface and its surface element at the source point $\\vec r'$.",
        "def-J": "Assumed local equivalent current or source distribution on the antenna surface.",
        "def-rho": "Volume source distribution in the general Helmholtz equation.",
        "def-uhat": "Local radiation/observation direction from source point to observation point; used for directional weighting.",
        "def-G": "Green’s function: the general kernel between observation point and source point. In free space, $G(\\vec r,\\vec r')=G(|\\vec r-\\vec r'|)$.",
        "def-r": "General observation point in the Green’s-function derivation.",
        "def-rprime": "General source point or integration point.",
        "def-R": "Observation point in the antenna/array model.",
        "def-S": "Antenna surface and its surface element at the source point $\\vec r'$.",
        "def-J": "Assumed local equivalent current or source distribution on the antenna surface.",
        "def-rho": "Volume source distribution in the general Helmholtz equation.",
        "def-uhat": "Local radiation/observation direction from source point to observation point; used for directional weighting."
      },
       fr: {
        "title": "Free 3D Phased Array Simulator",
        "view-size": "Taille 3D :",
        "fullscreen-3d": "Plein écran 3D",
        "visualization-settings": "Paramètres de Visualisation",
        "antenna-type": "Type d'Antenne:",
        "isotropic": "Isotrope",
        "patch": "Patch (Directionnelle)",
        "steering-direction": "Direction de Pointage (Beam Steering)",
        "azimuth": "Azimut (φ):",
        "elevation": "Élévation (θ):",
        "observation-point": "Point d'Observation",
        "distance": "Distance:",
        "sync-observation": "Observation = Pointage:",
        "show-observation-point": "Afficher le point d'observation:",
        "show-steering-point": "Afficher le point de direction:",
        "antenna-array-config": "Configuration du Réseau d'Antennes (Plan XZ)",
        "waves": "Ondes:",
        "vectors": "Vecteurs:",
        "far-field-pattern": "Diagramme de Champ:",
        "normalize-pattern": "Normaliser le Modèle:",
        "calculation-method-label": "Méthode de Calcul:",
        "exact-method": "Subpatch / Prescribed-Current Field Model",
        "approximation-method": "Fraunhofer / Fernfeld",
        "pattern-display": "Affichage du Diagramme:",
        "hemisphere": "Hémisphère en Couleur",
        "3d-shape": "Lobes 3D (Amplitude)",
        "subpatch-density": "Densité de Sous-patches:",
        "total-field-magnitude": "Amplitude du Champ Total:",
        "array-factor": "Champ Total (Facteur de Réseau)",
        "array-factor-desc": "Le champ total, souvent appelé facteur de réseau dans sa forme générale, représente le champ électromagnétique combiné en tout point de l'espace dû à tous les éléments d'antenne actifs. Il dépend des positions des antennes, de la direction de pointage et du diagramme de l'élément.",
        "formula-exact": "Formule Exacte (Superposition de Sous-patches):",
        "formula-approx": "Formule d'Approximation de Champ (Fraunhofer):",
        "parameters": "Paramètres:",
        "param-r": "$\\hat{r}$: Direction d'observation (depuis l'origine du réseau)",
        "param-r-local": "$\\hat{r}_{\\text{local},p}$: Direction d'observation locale (depuis le sous-patch $p$)",
        "param-s": "$\\hat{s}$: Direction de pointage",
        "param-rn": "$\\vec{r}_n$: Position du centre de l'antenne $n$",
        "param-rnp": "$\\vec{r}_{n,p}$: Position du sous-patch $p$ de l'antenne $n$",
        "param-k": "$k$: Nombre d'onde ($2\\pi/\\lambda$)",
        "param-Fp": "$F_p(\\hat{r}_{\\text{local},p})$: Caractéristique directionnelle du sous-patch $p$",
        "param-Fhatr": "$F(\\hat{r})$: Caractéristique directionnelle globale des éléments individuels",
        "param-Np": "$N_P$: Nombre de sous-patches par antenne",
        "observation-info": "Info du Point d'Observation:",
        "direction": "Direction:",
        "exact-field-real-part": "Re(A) subpatch:",
        "approx-field-real-part": "Re(A) Approximatif:",
        "required-steering-phases": "Déphasage requis pour le pointage du faisceau par antenne :",
        "approximation-note-text": "Des différences entre les diagrammes Exact et Approximé sont attendues, surtout à des <span id=\"distance-link\" class=\"text-blue-600 underline cursor-pointer\">distances plus courtes</span>, car l'approximation de champ n'est valide que pour de grandes distances par rapport au réseau. La partie réelle du champ approximé n'est affichée que si la méthode de calcul 'Approximation' est sélectionnée.",
        "math-foundations-title": "Fondements Mathématiques",
        "math-foundations-desc-helmholtz": "Le calcul du champ est basé sur les principes fondamentaux de la propagation des ondes, décrits par l'équation de Helmholtz.",
        "helmholtz-derivation-title": "Dérivation de l'équation de Helmholtz",
        "helmholtz-source-text": "L'équation de Helmholtz scalaire avec une distribution de source $\\rho(\\vec{r})$ est donnée par :",
        "helmholtz-source-eq": "$$(\\nabla^2 + k^2) \\phi(\\vec{r}) = -\\rho(\\vec{r})$$",
        "green-intro-text": "On définit d’abord la fonction de Green $G(\\vec{r}, \\vec{r}')$ comme la réponse à une source ponctuelle située en $\\vec{r}'$. En général, elle dépend de deux points : le point d’observation $\\vec{r}$ et le point source $\\vec{r}'$ :",
        "green-eq": "$$(\\nabla^2 + k^2) G(\\vec{r}, \\vec{r}') = -\\delta(\\vec{r} - \\vec{r}')$$",
        "superposition-intro-text": "La solution de l'équation originale est alors obtenue par la superposition (intégration) des réponses à toutes les sources ponctuelles qui composent la distribution $\\rho(\\vec{r}')$ :",
        "superposition-eq": "$$\\phi(\\vec{r}) = \\int G(\\vec{r}, \\vec{r}') \\rho(\\vec{r}') \\, d^3r'$$",
        "free-green-intro-text": "En espace libre, ou dans un milieu homogène à coefficients constants, l’opérateur de Helmholtz est invariant par translation. La fonction de Green ne dépend alors que de la distance entre le point d’observation et le point source :",
        "free-green-eq": "$$G(\\vec{r}, \\vec{r}') = \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|}$$",
        "show-this-by-text": "Cela peut être démontré par :",
        "show-this-li-1": "écrire l'équation en coordonnées sphériques par rapport à la distance radiale $R = |\\vec{r} - \\vec{r}'|$,",
        "show-this-li-2": "noter la propriété de distribution de la source de Dirac,",
        "show-this-li-3": "et choisir une onde sphérique sortante comme solution physiquement significative.",
        "total-field-solution-text": "Le champ total s’obtient par superposition de tous les points sources. En général, l’intégrale s’écrit avec $G(\\vec{r},\\vec{r}')$ ; dans l’espace libre invariant par translation, elle prend la forme d’une convolution :",
        "total-field-solution-eq": "$$\\phi(\\vec{r}) = \\int \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|} \\rho(\\vec{r}') \\, d^3r'$$",
        "application-to-surfaces-title": "Application aux Surfaces d'Antenne",
        "application-to-surfaces-text": "Dans le cas d'une surface S sans source mais limitée avec une distribution de champ proche connue (par exemple, les antennes patch), nous modélisons la source comme étant distribuée sur une surface. L'intégrale se simplifie en une intégrale de surface. C'est la base du principe de Huygens-Fresnel, qui stipule que chaque point sur un front d'onde peut être considéré comme une source d'ondelettes sphériques secondaires. Le champ $A(\\vec{R})$ en champ lointain est la superposition de ces ondes :",
        "application-to-surfaces-eq": "$$A(\\vec{R}) \\propto \\int_S J(\\vec{r}')\\,F(\\hat{u})\\,\\frac{e^{ik|\\vec{R}-\\vec{r}'|}}{|\\vec{R}-\\vec{r}'|}\\,dS'$$",
        "application-to-surfaces-conclusion": "Ici, $J(\\vec r')$ est la distribution locale équivalente de courant/source supposée, et $F(\\hat u)$ est une pondération directionnelle simplifiée, pas un diagramme vectoriel électromagnétique complet. Cette forme simple suppose l’espace libre ou un milieu homogène. Avec des murs, plans de masse, diélectriques ou matériaux variables, il faut utiliser le noyau général $G(\\vec R,\\vec r')$ au lieu de seulement la distance $|\\vec R-\\vec r'|$.",
        "distance-approx-title": "Approximation de Distance (Champ Lointain)",
        "distance-approx-intro": "En champ lointain, on peut approximer la distance d'un point d'observation $\\vec{R}$ à un élément d'antenne en $\\vec{r}_n$. La distance exacte est $|\\vec{R} - \\vec{r}_n|$. Si $R = |\\vec{R}|$ est la distance de l'origine au point d'observation et $\\hat{d} = \\vec{R}/R$ est la direction d'observation, alors :",
        "distance-approx-exact-eq": "$$\\begin{aligned}\n|\\vec{R}-\\vec{r}_n| &= \\sqrt{Q_n}\\\\\nQ_n &= R^2 - 2R(\\hat{d}\\cdot\\vec{r}_n) + |\\vec{r}_n|^2\n\\end{aligned}$$",
        "distance-approx-explanation": "Pour de grandes distances $R \\gg |\\vec{r}_n|$, on peut utiliser un développement de Taylor et négliger les termes d'ordre supérieur (approximation de Fraunhofer). Cela conduit à l'approximation de distance :",
        "distance-approx-approx-eq": "$$|\\vec{R} - \\vec{r}_n| \\approx R - (\\hat{d} \\cdot \\vec{r}_n)$$",
        "phase-delay-title": "Déphasage dû à la Différence de Chemin",
        "phase-delay-eq": "$$\\Delta l_n = -(\\hat{d} \\cdot \\vec{r}_n) \\quad\\Rightarrow\\quad \\phi_n = -k(\\hat{d} \\cdot \\vec{r}_n) \\text{ avec } k = \\frac{2\\pi}{\\lambda}$$",
        "beam-steering-explained": "Explication de la Formation de Faisceau",
        "beam-steering-desc": "La formation de faisceau permet l'orientation électronique du faisceau principal. Ceci est réalisé en appliquant des déphasages spécifiques à chaque élément d'antenne. Pour orienter le faisceau dans une direction $\\hat{s}$, la phase à l'antenne $n$ doit être avancée de $k(\\vec{r}_n \\cdot \\hat{s})$.",
        "steering-phase-formula": "Phase de Pointage:",
        "combined-element-response-formula": "Réponse Combinée de l'Élément:",
        "steering-tip": "Si vous souhaitez orienter le faisceau dans une direction d'observation spécifique, choisissez la direction de pointage $\\hat{s}$ égale à la direction d'observation $\\hat{d}$. Le déphasage requis est alors exactement l'inverse de la phase causée par la différence de chemin au point d'observation.",
        "fourier-transform-connection": "Connexion Transformée de Fourier et Champ Proche/Champ Lointain",
        "fourier-transform-desc": "Le diagramme de champ d'un réseau d'antennes est la Transformée de Fourier de la distribution de courant en champ proche. Cela signifie que chaque direction d'observation en champ lointain correspond à une 'fréquence spatiale' dans l'espace de Fourier.",
        "array-factor-fourier": "Facteur de Réseau comme Transformée de Fourier:",
        "inverse-fourier": "En appliquant la Transformée de Fourier inverse, on peut reconstruire la distribution en champ proche (excitations d'antenne) à partir du diagramme de champ.",
        "symbol-definitions": "Définitions des Symboles",
        "show-symbols": "Cliquez ici pour afficher les définitions des symboles",
        "def-A": "Champ total (facteur de réseau), une représentation normalisée sans amplitudes absolues ou constantes physiques.",
        "def-rn": "Vecteur de position de l'antenne $n$",
        "def-d": "Direction d'observation (vecteur unitaire)",
        "def-s": "Direction de pointage (vecteur unitaire)",
        "def-k": "Nombre d'onde ($2\\pi/\\lambda$)",
        "def-phi-n": "Délai de phase dû à la différence de chemin de l'antenne $n$ au point d'observation",
        "def-phi-n-steer": "Déphasage additionnel à l'antenne $n$ pour la formation de faisceau (Phase de Pointage)",
        "def-Fp": "Caractéristique directionnelle du sous-patch $p$ (facteur dans l'approche de superposition de sous-patches)",
        "def-Fhatr": "Caractéristique directionnelle globale des éléments individuels (facteur dans l'approche de Fraunhofer)",
        "def-An": "Poids d'amplitude pour l'antenne $n$",
        "def-n": "Nombre total d'éléments d'antenne dans le réseau",
        "def-Np": "Nombre de sous-patches par antenne",
        "def-lambda": "Longueur d'onde du signal",
        "def-rnp": "Position vector of the $p$-th subpatch of the $n$-th antenna",
        "def-G": "Green’s function: the general kernel between observation point and source point. In free space, $G(\\vec r,\\vec r')=G(|\\vec r-\\vec r'|)$.",
        "def-r": "General observation point in the Green’s-function derivation.",
        "def-rprime": "General source point or integration point.",
        "def-R": "Observation point in the antenna/array model.",
        "def-S": "Antenna surface and its surface element at the source point $\\vec r'$.",
        "def-J": "Assumed local equivalent current or source distribution on the antenna surface.",
        "def-rho": "Volume source distribution in the general Helmholtz equation.",
        "def-uhat": "Local radiation/observation direction from source point to observation point; used for directional weighting."
      },
      es: {
        "title": "Free 3D Phased Array Simulator",
        "view-size": "Tamaño 3D:",
        "fullscreen-3d": "Pantalla completa 3D",
        "visualization-settings": "Ajustes de Visualización",
        "antenna-type": "Tipo de Antena:",
        "isotropic": "Isotrópica",
        "patch": "Parche (Direccional)",
        "steering-direction": "Dirección de Orientación (Beam Steering)",
        "azimuth": "Acimut (φ):",
        "elevation": "Elevación (θ):",
        "observation-point": "Punto de Observación",
        "distance": "Distancia:",
        "sync-observation": "Observación = Orientación:",
        "show-observation-point": "Mostrar Punto de Observación:",
        "show-steering-point": "Mostrar Punto de Orientación:",
        "antenna-array-config": "Configuración del Conjunto de Antenas (Plano XZ)",
        "waves": "Ondas:",
        "vectors": "Vectores:",
        "far-field-pattern": "Patrón de Campo:",
        "normalize-pattern": "Normalizar Patrón:",
        "calculation-method-label": "Método de Cálculo:",
        "exact-method": "Aprox. subparches",
        "approximation-method": "Aproximación",
        "pattern-display": "Visualización del Patrón:",
        "hemisphere": "Hemisferio Codificado por Color",
        "3d-shape": "Lóbulos 3D (Magnitud)",
        "subpatch-density": "Densidad de Subparches:",
        "total-field-magnitude": "Magnitud del Campo Total:",
        "array-factor": "Campo Total (Factor de Conjunto)",
        "array-factor-desc": "El campo total, a menudo denominado factor de conjunto en su forma general, representa el campo electromagnético combinado en cualquier punto del espacio debido a todos los elementos de antena activos. Depende de las posiciones de las antenas, la dirección de orientación y el patrón del elemento.",
        "formula-exact": "Fórmula Exacta (Superposición de Subparches):",
        "formula-approx": "Fórmula de Aproximación de Campo (Fraunhofer):",
        "parameters": "Parámetros:",
        "param-r": "$\\hat{r}$: Dirección de observación (desde el origen del conjunto)",
        "param-r-local": "$\\hat{r}_{\\text{local},p}$: Dirección de observación local (desde el subparche $p$)",
        "param-s": "$\\hat{s}$: Dirección de orientación",
        "param-rn": "$\\vec{r}_n$: Posición del centro de la antena $n$",
        "param-rnp": "$\\vec{r}_{n,p}$: Posición del subparche $p$ de la antena $n$",
        "param-k": "$k$: Número de onda ($2\\pi/\\lambda$)",
        "param-Fp": "$F_p(\\hat{r}_{\\text{local},p})$: Característica direccional del subparche $p$",
        "param-Fhatr": "$F(\\hat{r})$: Característica direccional global de los elementos individuales",
        "param-Np": "$N_P$: Número de subparches por antena",
        "observation-info": "Información del Punto de Observación:",
        "direction": "Dirección:",
        "exact-field-real-part": "Re(A) subparches:",
        "approx-field-real-part": "Re(A) Aproximado:",
        "required-steering-phases": "Desplazamiento de fase requerido para la conformación del haz por antena:",
        "approximation-note-text": "Se esperan diferencias entre los patrones exactos y aproximados, especialmente a <span id=\"distance-link\" class=\"text-blue-600 underline cursor-pointer\">distancias más cortas</span>, ya que la aproximación de campo solo es válida para grandes distancias desde el conjunto. La parte real del campo aproximado solo se muestra cuando se selecciona el método de cálculo 'Aproximación'.",
        "math-foundations-title": "Fundamentos Matemáticos",
        "math-foundations-desc-helmholtz": "El cálculo del campo se basa en principios fundamentales de la propagación de ondas, descritos por la ecuación de Helmholtz.",
        "helmholtz-derivation-title": "Derivación de la Ecuación de Helmholtz",
        "helmholtz-source-text": "La ecuación de Helmholtz escalar con una distribución de fuente $\\rho(\\vec{r})$ viene dada por:",
        "helmholtz-source-eq": "$$(\\nabla^2 + k^2) \\phi(\\vec{r}) = -\\rho(\\vec{r})$$",
        "green-intro-text": "Primero se define la función de Green $G(\\vec{r}, \\vec{r}')$ como la respuesta a una fuente puntual situada en $\\vec{r}'$. En general, depende de dos puntos: el punto de observación $\\vec{r}$ y el punto fuente $\\vec{r}'$:",
        "green-eq": "$$(\\nabla^2 + k^2) G(\\vec{r}, \\vec{r}') = -\\delta(\\vec{r} - \\vec{r}')$$",
        "superposition-intro-text": "La solución a la ecuación original se obtiene entonces mediante la superposición (integración) de las respuestas a todas las fuentes puntuales que componen la distribución $\\rho(\\vec{r}')$:",
        "superposition-eq": "$$\\phi(\\vec{r}) = \\int G(\\vec{r}, \\vec{r}') \\rho(\\vec{r}') \\, d^3r'$$",
        "free-green-intro-text": "En el espacio libre, o en un medio homogéneo con coeficientes constantes, el operador de Helmholtz es invariante por traslación. Por eso la función de Green depende solo de la distancia entre el punto de observación y el punto fuente:",
        "free-green-eq": "$$G(\\vec{r}, \\vec{r}') = \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|}$$",
        "show-this-by-text": "Esto se puede demostrar mediante:",
        "show-this-li-1": "escribir la ecuación en coordenadas esféricas con respecto a la distancia radial $R = |\\vec{r} - \\vec{r}'|$,",
        "show-this-li-2": "observar la propiedad distributiva de la fuente de Dirac,",
        "show-this-li-3": "y elegir una onda esférica saliente como solución físicamente significativa.",
        "total-field-solution-text": "El campo total se obtiene por superposición de todos los puntos fuente. En general la integral se escribe con $G(\\vec{r},\\vec{r}')$; en el espacio libre invariante por traslación toma la forma de una convolución:",
        "total-field-solution-eq": "$$\\phi(\\vec{r}) = \\int \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|} \\rho(\\vec{r}') \\, d^3r'$$",
        "application-to-surfaces-title": "Aplicación a Superficies de Antena",
        "application-to-surfaces-text": "En el caso de una superficie S sin fuentes pero limitada con una distribución de campo cercano conocida (p. ej., antenas de parche), modelamos la fuente como distribuida sobre una superficie. La integral se simplifica a una integral de superficie. Esta es la base del principio de Huygens-Fresnel, que establece que cada punto en un frente de onda puede considerarse una fuente de ondeletas esféricas secundarias. El campo $A(\\vec{R})$ en el campo lejano es la superposición de estas ondas:",
        "application-to-surfaces-eq": "$$A(\\vec{R}) \\propto \\int_S J(\\vec{r}')\\,F(\\hat{u})\\,\\frac{e^{ik|\\vec{R}-\\vec{r}'|}}{|\\vec{R}-\\vec{r}'|}\\,dS'$$",
        "application-to-surfaces-conclusion": "Aquí, $J(\\vec r')$ es la distribución local equivalente de corriente/fuente asumida, y $F(\\hat u)$ es una ponderación direccional simplificada, no un patrón electromagnético vectorial completo. Esta forma simple supone espacio libre o un medio homogéneo. Con paredes, planos de masa, dieléctricos o materiales variables, debe usarse el núcleo general $G(\\vec R,\\vec r')$ en lugar de solo la distancia $|\\vec R-\\vec r'|$.",
        "distance-approx-title": "Aproximación de Distancia (Campo Lejano)",
        "distance-approx-intro": "En el campo lejano, podemos aproximar la distancia desde un punto de observación $\\vec{R}$ a un elemento de antena en $\\vec{r}_n$. La distancia exacta es $|\\vec{R} - \\vec{r}_n|$. Si $R = |\\vec{R}|$ es la distancia desde el origen al punto de observación y $\\hat{d} = \\vec{R}/R$ es la dirección de observación, entonces:",
        "distance-approx-exact-eq": "$$\\begin{aligned}\n|\\vec{R}-\\vec{r}_n| &= \\sqrt{Q_n}\\\\\nQ_n &= R^2 - 2R(\\hat{d}\\cdot\\vec{r}_n) + |\\vec{r}_n|^2\n\\end{aligned}$$",
        "distance-approx-explanation": "Para grandes distancias $R \\gg |\\vec{r}_n|$, podemos usar una expansión de Taylor y despreciar los términos de orden superior (aproximación de Fraunhofer). Esto conduce a la aproximación de distancia:",
        "distance-approx-approx-eq": "$$|\\vec{R} - \\vec{r}_n| \\approx R - (\\hat{d} \\cdot \\vec{r}_n)$$",
        "phase-delay-title": "Desfase por Diferencia de Camino",
        "phase-delay-eq": "$$\\Delta l_n = -(\\hat{d} \\cdot \\vec{r}_n) \\quad\\Rightarrow\\quad \\phi_n = -k(\\hat{d} \\cdot \\vec{r}_n) \\text{ con } k = \\frac{2\\pi}{\\lambda}$$",
        "beam-steering-explained": "Conformación de Haz Explicada",
        "beam-steering-desc": "La conformación de haz permite la orientación electrónica del haz principal. Esto se logra aplicando cambios de fase específicos a cada elemento de antena. Para orientar el haz en una dirección $\\hat{s}$, la fase en la antena $n$ debe adelantarse en $k(\\vec{r}_n \\cdot \\hat{s})$.",
        "steering-phase-formula": "Fase de Orientación:",
        "combined-element-response-formula": "Respuesta Combinada del Elemento:",
        "steering-tip": "Si desea orientar el haz en una dirección de observación específica, elija la dirección de orientación $\\hat{s}$ igual a la dirección de observación $\\hat{d}$. El cambio de fase requerido es entonces exactamente el inverso de la fase causada por la diferencia de trayectoria en el punto de observación.",
        "fourier-transform-connection": "Conexión de Transformada de Fourier y Campo Cercano/Lejano",
        "fourier-transform-desc": "El patrón de campo de un conjunto de antenas es la Transformada de Fourier de la distribución de corriente en el campo cercano. Esto significa que cada dirección de observación en el campo lejano corresponde a una 'frecuencia espacial' en el espacio de Fourier.",
        "array-factor-fourier": "Factor de Conjunto como Transformada de Fourier:",
        "inverse-fourier": "Aplicando la Transformada Inversa de Fourier, se puede reconstruir la distribución de campo cercano (excitaciones de antena) a partir del patrón de campo.",
        "symbol-definitions": "Definiciones de Símbolos",
        "show-symbols": "Haz clic aquí para mostrar las definiciones de los símbolos",
        "def-A": "Campo total (factor de conjunto), una representación normalizada sin amplitudes absolutas ni constantes físicas.",
        "def-rn": "Vector de posición de la antena $n$",
        "def-d": "Dirección de observación (vector unitario)",
        "def-s": "Dirección de orientación (vector unitario)",
        "def-k": "Número de onda ($2\\pi/\\lambda$)",
        "def-phi-n": "Retraso de fase debido a la diferencia de trayectoria desde la antena $n$ hasta el punto de observación",
        "def-phi-n-steer": "Desplazamiento de fase adicional en la antena $n$ para la conformación del haz (Fase de Orientación)",
        "def-Fp": "Característica direccional del subparche $p$ (factor en el enfoque de superposición de subparches)",
        "def-Fhatr": "Característica direccional global de los elementos individuales (factor en el enfoque de Fraunhofer)",
        "def-An": "Peso de amplitud para la antena $n$",
        "def-n": "Número total de elementos de antena en el conjunto",
        "def-Np": "Número de subparches por antena",
        "def-lambda": "Longitud de onda de la señal",
        "def-rnp": "Position vector of the $p$-th subpatch of the $n$-th antenna",
        "def-G": "Green’s function: the general kernel between observation point and source point. In free space, $G(\\vec r,\\vec r')=G(|\\vec r-\\vec r'|)$.",
        "def-r": "General observation point in the Green’s-function derivation.",
        "def-rprime": "General source point or integration point.",
        "def-R": "Observation point in the antenna/array model.",
        "def-S": "Antenna surface and its surface element at the source point $\\vec r'$.",
        "def-J": "Assumed local equivalent current or source distribution on the antenna surface.",
        "def-rho": "Volume source distribution in the general Helmholtz equation.",
        "def-uhat": "Local radiation/observation direction from source point to observation point; used for directional weighting."
      },
      zh: {
        "title": "Free 3D Phased Array Simulator",
        "view-size": "3D视图大小：",
        "fullscreen-3d": "3D全屏",
        "visualization-settings": "可视化设置",
        "antenna-type": "天线类型：",
        "isotropic": "全向性",
        "patch": "贴片（定向）",
        "steering-direction": "波束指向方向",
        "azimuth": "方位角 (φ)：",
        "elevation": "仰角 (θ)：",
        "observation-point": "观测点",
        "distance": "距离：",
        "sync-observation": "观测 = 指向：",
        "show-observation-point": "显示观测点：",
        "show-steering-point": "显示转向点：",
        "antenna-array-config": "天线阵列配置（XZ平面）",
        "waves": "波：",
        "vectors": "向量：",
        "far-field-pattern": "场方向图：",
        "normalize-pattern": "标准化模式：",
        "calculation-method-label": "计算方法：",
        "exact-method": "子贴片近似",
        "approximation-method": "近似",
        "pattern-display": "方向图显示：",
        "hemisphere": "彩色半球",
        "3d-shape": "3D波瓣形状（幅度）",
        "subpatch-density": "子补丁密度：",
        "total-field-magnitude": "总场幅值:",
        "array-factor": "总场（阵列因子）",
        "array-factor-desc": "总场，通常以其通用形式称为阵列因子，表示由于所有有源天线元件在空间中任意点产生的组合电磁场。它取决于天线位置、指向方向和元件方向图。",
        "formula-exact": "精确公式（子补丁叠加）：",
        "formula-approx": "场近似公式（夫琅禾费）：",
        "parameters": "参数：",
        "param-r": "$\\hat{r}$: 观测方向（从阵列原点）",
        "param-r-local": "$\\hat{r}_{\\text{local},p}$: 局部观测方向（从子补丁 $p$）",
        "param-s": "$\\hat{s}$: 指向方向",
        "param-rn": "$\\vec{r}_n$: 天线 $n$ 的中心位置",
        "param-rnp": "$\\vec{r}_{n,p}$: 天线 $n$ 的子补丁 $p$ 的位置",
        "param-k": "$k$: 波数 ($2\\pi/\\lambda$)",
        "param-Fp": "$F_p(\\hat{r}_{\\text{local},p})$: 子补丁 $p$ 的方向特性",
        "param-Fhatr": "$F(\\hat{r})$: 单个元件的全局方向特性",
        "param-Np": "$N_P$: 每根天线的子补丁数量",
        "observation-info": "观测点信息：",
        "direction": "方向：",
        "exact-field-real-part": "Re(A) 子贴片:",
        "approx-field-real-part": "Re(A) 近似值:",
        "required-steering-phases": "每根天线波束指向所需的相移：",
        "approximation-note-text": "精确模式和近似模式之间的差异是预期的，尤其是在<span id=\"distance-link\" class=\"text-blue-600 underline cursor-pointer\">较短距离处</span>，因为场近似仅对距离阵列较远的距离有效，精确计算考虑了近场效应。近似场的实部仅在选择“近似”计算方法时显示。",
        "math-foundations-title": "数学基础",
        "math-foundations-desc-helmholtz": "场的计算基于亥姆霍兹方程所描述的波传播基本原理。",
        "helmholtz-derivation-title": "亥姆霍兹方程推导",
        "helmholtz-source-text": "带有源分布 $\\rho(\\vec{r})$ 的标量亥姆霍兹方程由下式给出：",
        "helmholtz-source-eq": "$$(\\nabla^2 + k^2) \\phi(\\vec{r}) = -\\rho(\\vec{r})$$",
        "green-intro-text": "首先，将格林函数 $G(\\vec{r}, \\vec{r}')$ 定义为位于源点 $\\vec{r}'$ 的点源响应。一般情况下，它依赖两个点：观测点 $\\vec{r}$ 和源点 $\\vec{r}'$：",
        "green-eq": "$$(\\nabla^2 + k^2) G(\\vec{r}, \\vec{r}') = -\\delta(\\vec{r} - \\vec{r}')$$",
        "superposition-intro-text": "然后，通过对构成分布 $\\rho(\\vec{r}')$ 的所有点源的响应进行叠加（积分），可以获得原始方程的解：",
        "superposition-eq": "$$\\phi(\\vec{r}) = \\int G(\\vec{r}, \\vec{r}') \\rho(\\vec{r}') \\, d^3r'$$",
        "free-green-intro-text": "在自由空间或具有常系数的均匀介质中，亥姆霍兹算子具有平移不变性。因此格林函数只依赖观测点与源点之间的距离：",
        "free-green-eq": "$$G(\\vec{r}, \\vec{r}') = \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|}$$",
        "show-this-by-text": "这可以通过以下方式证明：",
        "show-this-li-1": "在球坐标中相对于径向距离 $R = |\\vec{r} - \\vec{r}'|$ 书写方程，",
        "show-this-li-2": "注意狄拉克源的分布特性，",
        "show-this-li-3": "并选择一个出射球面波作为物理上有意义的解。",
        "total-field-solution-text": "总场由所有源点的响应叠加得到。一般情况下积分应写成含 $G(\\vec{r},\\vec{r}')$ 的形式；只有在平移不变的自由空间中，它才变成卷积形式：",
        "total-field-solution-eq": "$$\\phi(\\vec{r}) = \\int \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|} \\rho(\\vec{r}') \\, d^3r'$$",
        "application-to-surfaces-title": "天线表面应用",
        "application-to-surfaces-text": "对于具有已知近场分布的无源但有界表面S（例如贴片天线），我们将源建模为分布在表面上。积分简化为表面积分。这是惠更斯-菲涅耳原理的基础，该原理指出波前的每个点都可以被视为次级球面波的源。远场中的场 $A(\\vec{R})$ 是这些波的叠加：",
        "application-to-surfaces-eq": "$$A(\\vec{R}) \\propto \\int_S J(\\vec{r}')\\,F(\\hat{u})\\,\\frac{e^{ik|\\vec{R}-\\vec{r}'|}}{|\\vec{R}-\\vec{r}'|}\\,dS'$$",
        "application-to-surfaces-conclusion": "这里，$J(\\vec r')$ 是假设的局部等效电流/源分布，$F(\\hat u)$ 是简化的方向权重，并不是完整的矢量电磁方向图。这个简单形式假设自由空间或均匀介质。若存在墙、接地板、介质层或空间变化材料，则必须使用一般核 $G(\\vec R,\\vec r')$，而不能只使用距离 $|\\vec R-\\vec r'|$。",
        "distance-approx-title": "距离近似（远场）",
        "distance-approx-intro": "在远场中，我们可以近似从观察点 $\\vec{R}$ 到天线单元 $\\vec{r}_n$ 的距离。精确距离为 $|\\vec{R} - \\vec{r}_n|$。如果 $R = |\\vec{R}|$ 是从原点到观察点的距离，$\\hat{d} = \\vec{R}/R$ 是观察方向，则：",
        "distance-approx-exact-eq": "$$\\begin{aligned}\n|\\vec{R}-\\vec{r}_n| &= \\sqrt{Q_n}\\\\\nQ_n &= R^2 - 2R(\\hat{d}\\cdot\\vec{r}_n) + |\\vec{r}_n|^2\n\\end{aligned}$$",
        "distance-approx-explanation": "对于远距离 $R \\gg |\\vec{r}_n|$，我们可以使用泰勒展开并忽略高阶项（夫琅禾费近似）。这导致了距离近似：",
        "distance-approx-approx-eq": "$$|\\vec{R} - \\vec{r}_n| \\approx R - (\\hat{d} \\cdot \\vec{r}_n)$$",
        "phase-delay-title": "路径差异引起的相位延迟",
        "phase-delay-eq": "$$\\Delta l_n = -(\\hat{d} \\cdot \\vec{r}_n) \\quad\\Rightarrow\\quad \\phi_n = -k(\\hat{d} \\cdot \\vec{r}_n) \\text{ with } k = \\frac{2\\pi}{\\lambda}$$",
        "beam-steering-explained": "波束指向解释",
        "beam-steering-desc": "波束成形实现了主波束的电子转向。这是通过对每个天线单元施加特定的相移来实现的。为了将波束指向方向 $\\hat{s}$，天线 $n$ 处的相位必须提前 $k(\\vec{r}_n \\cdot \\hat{s})$。",
        "steering-phase-formula": "指向相位：",
        "combined-element-response-formula": "组合元素响应：",
        "steering-tip": "如果您希望将波束指向特定的观测方向，请选择指向方向 $\\hat{s}$ 等于观测方向 $\\hat{d}$。所需的相移恰好是观测点处路径差异引起的相位的反向。",
        "fourier-transform-connection": "傅里叶变换与近场/远场",
        "fourier-transform-desc": "天线阵列的场模式是近场电流分布的傅里叶变换。这意味着远场中的每个观测方向都对应于傅里叶空间中的“空间频率”。",
        "array-factor-fourier": "作为傅里叶变换的阵列因子：",
        "inverse-fourier": "通过应用傅里叶逆变换，可以从场模式重建近场分布（天线激励）。",
        "symbol-definitions": "符号定义",
        "show-symbols": "点击此处显示符号定义",
        "def-A": "总场（阵列因子），一种归一化表示，不考虑绝对振幅或$\\epsilon$或$\\mu$等物理常数。",
        "def-rn": "天线 $n$ 的位置向量",
        "def-d": "观测方向（单位向量）",
        "def-s": "指向方向（单位向量）",
        "def-k": "波数 ($2\\pi/\\lambda$)",
        "def-phi-n": "从天线 $n$ 到观测点的路径差异引起的相位延迟",
        "def-phi-n-steer": "天线 $n$ 用于波束成形的额外相移（指向相位）",
        "def-Fp": "子补丁 $p$ 的方向特性（子补丁叠加方法中的因子）",
        "def-Fhatr": "单个元件的全局方向特性（夫琅禾费方法中的因子）",
        "def-An": "天线 $n$ 的幅度权重",
        "def-n": "阵列中天线单元的总数",
        "def-Np": "每根天线的子补丁数量",
        "def-lambda": "信号的波长",
        "def-rnp": "Position vector of the $p$-th subpatch of the $n$-th antenna",
        "def-G": "Green’s function: the general kernel between observation point and source point. In free space, $G(\\vec r,\\vec r')=G(|\\vec r-\\vec r'|)$.",
        "def-r": "General observation point in the Green’s-function derivation.",
        "def-rprime": "General source point or integration point.",
        "def-R": "Observation point in the antenna/array model.",
        "def-S": "Antenna surface and its surface element at the source point $\\vec r'$.",
        "def-J": "Assumed local equivalent current or source distribution on the antenna surface.",
        "def-rho": "Volume source distribution in the general Helmholtz equation.",
        "def-uhat": "Local radiation/observation direction from source point to observation point; used for directional weighting."
      },
      ja: {
        "title": "Free 3D Phased Array Simulator",
        "view-size": "3D表示サイズ:",
        "fullscreen-3d": "3D全画面",
        "visualization-settings": "可視化設定",
        "antenna-type": "アンテナタイプ:",
        "isotropic": "等方性",
        "patch": "パッチ（指向性）",
        "steering-direction": "ビームステアリング方向",
        "azimuth": "方位角 (φ):",
        "elevation": "仰角 (θ):",
        "observation-point": "観測点",
        "distance": "距離:",
        "sync-observation": "観測 = ステアリング:",
        "show-observation-point": "観測点を表示:",
        "show-steering-point": "ステアリングポイントを表示:",
        "antenna-array-config": "アンテナアレイ構成 (XZ平面)",
        "waves": "波:",
        "vectors": "ベクトル:",
        "far-field-pattern": "電界パターン:",
        "normalize-pattern": "パターンを正規化:",
        "calculation-method-label": "計算方法:",
        "exact-method": "サブパッチ近似",
        "approximation-method": "近似",
        "pattern-display": "パターン表示:",
        "hemisphere": "色分けされた半球",
        "3d-shape": "3Dローブ形状（振幅）",
        "subpatch-density": "サブパッチ密度:",
        "total-field-magnitude": "全界磁の大きさ:",
        "array-factor": "全界磁（アレイファクター）",
        "array-factor-desc": "全界磁は、一般的にはアレイファクターと呼ばれ、すべてのアクティブなアンテナ要素によって空間の任意の点に生成される結合された電磁界を表します。これは、アンテナの位置、ステアリング方向、および要素パターンに依存します。",
        "formula-exact": "厳密な式 (サブパッチ重ね合わせ):",
        "formula-approx": "電界近似式 (フラウンホーファー):",
        "parameters": "パラメータ:",
        "param-r": "$\\hat{r}$: 観測方向 (アレイ原点から)",
        "param-r-local": "$\\hat{r}_{\\text{local},p}$: ローカル観測方向 (サブパッチ $p$ から)",
        "param-s": "$\\hat{s}$: ステアリング方向",
        "param-rn": "$\\vec{r}_n$: アンテナ $n$ の中心位置",
        "param-rnp": "$\\vec{r}_{n,p}$: アンテナ $n$ のサブパッチ $p$ の位置",
        "param-k": "$k$: 波数 ($2\\pi/\\lambda$)",
        "param-Fp": "$F_p(\\hat{r}_{\\text{local},p})$: サブパッチ $p$ の指向特性",
        "param-Fhatr": "$F(\\hat{r})$: 個々の要素のグローバル指向特性",
        "param-Np": "$N_P$: アンテナあたりのサブパッチ数",
        "observation-info": "観測点情報:",
        "direction": "方向:",
        "exact-field-real-part": "Re(A) サブパッチ:",
        "approx-field-real-part": "Re(A) 近似:",
        "required-steering-phases": "アンテナごとのビームステアリングに必要な位相シフト:",
        "approximation-note-text": "厳密なパターンと近似パターンとの間の違いは、特に<span id=\"distance-link\" class=\"text-blue-600 underline cursor-pointer\">短い距離</span>で予想されます。これは、電界近似がアレイからの長い距離にのみ有効であり、厳密な計算では近接界効果が考慮されるためです。近似界の実数部は、計算方法として「近似」が選択されている場合にのみ表示されます。",
        "math-foundations-title": "数学的基礎",
        "math-foundations-desc-helmholtz": "電界の計算は、ヘルムホルツ方程式によって記述される波の伝播の基本原理に基づいています。",
        "helmholtz-derivation-title": "ヘルムホルツ方程式からの導出",
        "helmholtz-source-text": "ソース分布 $\\rho(\\vec{r})$ を持つスカラーヘルムホルツ方程式は次のように与えられます。",
        "helmholtz-source-eq": "$$(\\nabla^2 + k^2) \\phi(\\vec{r}) = -\\rho(\\vec{r})$$",
        "green-intro-text": "まず、グリーン関数 $G(\\vec{r}, \\vec{r}')$ は、源点 $\\vec{r}'$ にある点源への応答として定義されます。一般には、観測点 $\\vec{r}$ と源点 $\\vec{r}'$ の2点に依存します。",
        "green-eq": "$$(\\nabla^2 + k^2) G(\\vec{r}, \\vec{r}') = -\\delta(\\vec{r} - \\vec{r}')$$",
        "superposition-intro-text": "元の方程式の解は、分布 $\\rho(\\vec{r}')$ を構成するすべての点源への応答の重ね合わせ（積分）によって得られます。",
        "superposition-eq": "$$\\phi(\\vec{r}) = \\int G(\\vec{r}, \\vec{r}') \\rho(\\vec{r}') \\, d^3r'$$",
        "free-green-intro-text": "自由空間、または係数が一定の一様媒質では、ヘルムホルツ演算子は並進不変です。そのためグリーン関数は観測点と源点の距離だけに依存します。",
        "free-green-eq": "$$G(\\vec{r}, \\vec{r}') = \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|}$$",
        "show-this-by-text": "これは次のようにして示すことができます。",
        "show-this-li-1": "方程式を半径方向距離 $R = |\\vec{r} - \\vec{r}'|$ に関して球面座標で書くこと、",
        "show-this-li-2": "ディラックソースの分布特性に注意すること、",
        "show-this-li-3": "そして物理的に意味のある解として外向き球面波を選ぶこと。 ",
        "total-field-solution-text": "全電界はすべての源点からの応答を重ね合わせて得られます。一般には積分は $G(\\vec{r},\\vec{r}')$ を用いて書きます。並進不変な自由空間の場合だけ、これは畳み込みの形になります。",
        "total-field-solution-eq": "$$\\phi(\\vec{r}) = \\int \\frac{e^{ik|\\vec{r} - \\vec{r}'|}}{4\\pi|\\vec{r} - \\vec{r}'|} \\rho(\\vec{r}') \\, d^3r'$$",
        "application-to-surfaces-title": "アンテナ表面への応用",
        "application-to-surfaces-text": "既知の近接場分布を持つ、ソースフリーだが有界な表面S（例：パッチアンテナ）の場合、ソースを表面上に分布しているとモデル化します。積分は面積分に単純化されます。これは、波面のすべての点が二次球面波のソースと見なせるというホイヘンス-フレネルの原理の基礎です。遠方界における電界 $A(\\vec{R})$ は、これらの波の重ね合わせです。",
        "application-to-surfaces-eq": "$$A(\\vec{R}) \\propto \\int_S J(\\vec{r}')\\,F(\\hat{u})\\,\\frac{e^{ik|\\vec{R}-\\vec{r}'|}}{|\\vec{R}-\\vec{r}'|}\\,dS'$$",
        "application-to-surfaces-conclusion": "ここで、$J(\\vec r')$ は仮定された局所等価電流/源分布であり、$F(\\hat u)$ は簡略化された方向重みです。これは完全なベクトル電磁界パターンではありません。この単純な形は自由空間または一様媒質を仮定します。壁、接地板、誘電体層、空間的に変化する材料がある場合は、距離 $|\\vec R-\\vec r'|$ だけではなく、一般の核 $G(\\vec R,\\vec r')$ を使う必要があります。",
        "distance-approx-title": "距離近似（遠方界）",
        "distance-approx-intro": "遠方界では、観測点 $\\vec{R}$ からアンテナ素子 $\\vec{r}_n$ までの距離を近似できます。正確な距離は $|\\vec{R} - \\vec{r}_n|$ です。$R = |\\vec{R}|$ が原点から観測点までの距離で、$\\hat{d} = \\vec{R}/R$ が観測方向の場合、次のようになります。",
        "distance-approx-exact-eq": "$$\\begin{aligned}\n|\\vec{R}-\\vec{r}_n| &= \\sqrt{Q_n}\\\\\nQ_n &= R^2 - 2R(\\hat{d}\\cdot\\vec{r}_n) + |\\vec{r}_n|^2\n\\end{aligned}$$",
        "distance-approx-explanation": "長距離 $R \\gg |\\vec{r}_n|$ の場合、テイラー展開を使用して高次の項を無視できます（フラウンホーファー近似）。これにより、距離の近似が得られます。",
        "distance-approx-approx-eq": "$$|\\vec{R} - \\vec{r}_n| \\approx R - (\\hat{d} \\cdot \\vec{r}_n)$$",
        "phase-delay-title": "経路差からの位相遅延",
        "phase-delay-eq": "$$\\Delta l_n = -(\\hat{d} \\cdot \\vec{r}_n) \\quad\\Rightarrow\\quad \\phi_n = -k(\\hat{d} \\cdot \\vec{r}_n) \\text{ with } k = \\frac{2\\pi}{\\lambda}$$",
        "beam-steering-explained": "ビームステアリングの説明",
        "beam-steering-desc": "ビームフォーミングは、主ビームの電子的な方向付けを可能にします。これは、各アンテナ要素に特定の位相シフトを適用することによって実現されます。ビームを方向 $\\hat{s}$ に向けるには、アンテナ $n$ の位相を $k(\\vec{r}_n \\cdot \\hat{s})$ だけ進める必要があります。",
        "steering-phase-formula": "ステアリング位相:",
        "combined-element-response-formula": "結合された要素応答:",
        "steering-tip": "特定の観測方向にビームを向ける場合は、ステアリング方向 $\\hat{s}$ を観測方向 $\\hat{d}$ と同じにします。必要な位相シフトは、観測点での経路差によって引き起こされる位相と正確に逆になります。",
        "fourier-transform-connection": "フーリエ変換と近接界/遠方界",
        "fourier-transform-desc": "アンテナアレイの電界パターンは、近接界の電流分布のフーリエ変換です。これは、遠方界の各観測方向がフーリエ空間における「空間周波数」に対応することを意味します。",
        "array-factor-fourier": "フーリエ変換としてのアレイファクター:",
        "inverse-fourier": "逆フーリエ変換を適用することにより、近接界分布（アンテナ励起）を遠方界パターンから再構築できます。",
        "symbol-definitions": "記号の定義",
        "show-symbols": "記号の定義を表示するにはここをクリック",
        "def-A": "全界磁（アレイファクター）。絶対振幅や比誘電率、透磁率などの物理定数を考慮しない正規化された表現です。",
        "def-rn": "アンテナ $n$ の位置ベクトル",
        "def-d": "観測方向（単位ベクトル）",
        "def-s": "ステアリング方向（単位ベクトル）",
        "def-k": "波数 ($2\\pi/\\lambda$)、ここで $\\lambda$ は波長",
        "def-phi-n": "アンテナ $n$ から観測点までの経路差による位相遅延",
        "def-phi-n-steer": "ビームフォーミングのためのアンテナ $n$ の追加位相シフト（ステアリング位相）",
        "def-Fp": "サブパッチ $p$ の指向特性（サブパッチ重ね合わせアプローチにおける因子）",
        "def-Fhatr": "個々の要素のグローバル指向特性（フラウンホーファーアプローチにおける因子）",
        "def-An": "アンテナ $n$ の振幅重み",
        "def-n": "アレイ内のアンテナ要素の総数",
        "def-Np": "アンテナあたりのサブパッチ数",
        "def-lambda": "信号の波長",
        "def-rnp": "Position vector of the $p$-th subpatch of the $n$-th antenna",
        "def-G": "Green’s function: the general kernel between observation point and source point. In free space, $G(\\vec r,\\vec r')=G(|\\vec r-\\vec r'|)$.",
        "def-r": "General observation point in the Green’s-function derivation.",
        "def-rprime": "General source point or integration point.",
        "def-R": "Observation point in the antenna/array model.",
        "def-S": "Antenna surface and its surface element at the source point $\\vec r'$.",
        "def-J": "Assumed local equivalent current or source distribution on the antenna surface.",
        "def-rho": "Volume source distribution in the general Helmholtz equation.",
        "def-uhat": "Local radiation/observation direction from source point to observation point; used for directional weighting."
      }
    };

    // Extra translation coverage for static website/UI text.
    const translationPatches = {
      "en": {
            "seo-title": "Free 3D Phased Array Simulator for Beamforming & Antenna Array Visualization",
            "seo-desc-1": "Explore phased array beam steering directly in the browser. This interactive RF engineering tool visualizes antenna array geometry, element spacing, steering direction, 3D radiation lobes, simplified mutual coupling and prescribed-current Huygens-style/Fraunhofer behavior.",
            "seo-desc-2": "The simulator is designed for learning and experimentation: instead of relying only on fixed 2D antenna pattern pictures, it uses vector-based field calculations to show how antenna elements combine in 3D space.",
            "seo-start": "Start the simulator",
            "seo-github": "View source code on GitHub",
            "keyword-phased-array-simulator": "phased array simulator",
            "keyword-antenna-array-visualizer": "antenna array visualizer",
            "keyword-beamforming-tool": "beamforming tool",
            "keyword-3d-radiation-pattern": "3D radiation pattern",
            "keyword-rf-engineering": "RF engineering",
            "source-card": "Source code: inspect, fork or improve the project on <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
            "canvas-controls-summary": "3D view settings & controls",
            "mouse-controls-label": "3D controls:",
            "mouse-left": "Left mouse: rotate",
            "mouse-right": "Right mouse: move",
            "mouse-scroll": "Scroll: zoom",
            "mouse-double": "Double-click: fullscreen",
            "x-elements": "Surface x elements:",
            "z-elements": "Surface y elements:",
            "spacing": "Spacing:",
            "taper": "Taper:",
            "uniform": "Uniform",
            "dolph-chebyshev": "Dolph-Chebyshev",
            "chebyshev-sll": "Chebyshev SLL:",
            "taper-note": "Chebyshev taper changes amplitudes, not phases. For a 2D array this demo uses separable weights: <span class=\"font-mono\">w(x,z)=w_x(x)·w_z(z)</span>. More elements make the main lobe narrower; tapering mainly controls sidelobes.",
            "table-symbol": "Symbol",
            "table-definition": "Definition",
            "footer-html": "© 2026 phased-array-simulator.com – Phased Array Visualization <br>Open source: <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#3b82f6; text-decoration:none;\">GitHub Repository</a> <br>Lukas Meienberger · <a href=\"mailto:lumeitech@gmail.com\" style=\"color:#3b82f6; text-decoration:none;\">lumeitech@gmail.com</a>",
            "practical-workflow-title": "Practical workflow: solve sources first, then combine fields",
            "practical-workflow-desc": "The method shown here is the second step: it computes fields from known or assumed equivalent currents. In real antenna projects, those sources are often obtained first from measurement or a full-wave method, then many array elements are combined quickly by superposition.",
            "practical-workflow-li-1": "FEM or FDTD solve fields in a volume; Method of Moments (MoM) usually solves surface currents through an integral equation.",
            "practical-workflow-li-2": "Once $J(\\vec r)$ is known, the radiation integral can be evaluated directly without solving MoM again.",
            "practical-workflow-li-3": "For close arrays, mutual coupling and changed element currents still matter. As a rough rule, $\\lambda/2$ spacing is much safer than $\\lambda/4$ for weak coupling.",
            "mutual-coupling": "Mutual coupling:",
            "coupling-strength": "Coupling estimate:",
            "param-w": "$w_{n,p} \\propto J(\\vec r_{n,p})\\Delta S_p$: subpatch weight from local current density and area",
            "subpatch-accuracy-note": "Important: the subpatch sum is a Huygens/current-source approximation. It improves when subpatches get smaller and when the local current distribution $J(\\vec r)$ is known. In this demo $J$ is heavily simplified. The optional coupling model modifies each antenna element current, but it is still not a full-wave solution; real patch currents, substrate effects and strong mutual coupling require FEM/MoM/FDTD or measurements."
      },
      "de": {
            "seo-title": "Kostenloser 3D Phased-Array-Simulator für Beamforming & Antennenarray-Visualisierung",
            "seo-desc-1": "Erkunde Phased-Array-Beam-Steering direkt im Browser. Dieses interaktive RF-Engineering-Tool visualisiert Antennenarray-Geometrie, Elementabstand, Lenkrichtung, 3D-Strahlungskeulen, vereinfachte gegenseitige Kopplung und vorgeschriebene Huygens-/Fraunhofer-Feldmodelle.",
            "seo-desc-2": "Der Simulator ist für Lernen und Experimente gedacht: statt nur feste 2D-Antennendiagramme zu zeigen, nutzt er vektorbasierte Feldberechnungen, um darzustellen, wie Antennenelemente im 3D-Raum zusammenwirken.",
            "seo-start": "Simulator starten",
            "seo-github": "Quellcode auf GitHub ansehen",
            "keyword-phased-array-simulator": "Phased-Array-Simulator",
            "keyword-antenna-array-visualizer": "Antennenarray-Visualizer",
            "keyword-beamforming-tool": "Beamforming-Tool",
            "keyword-3d-radiation-pattern": "3D-Strahlungsdiagramm",
            "keyword-rf-engineering": "RF Engineering",
            "source-card": "Quellcode: Projekt auf <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> ansehen, forken oder verbessern.",
            "canvas-controls-summary": "3D-Ansicht: Einstellungen & Steuerung",
            "mouse-controls-label": "3D-Steuerung:",
            "mouse-left": "Linke Maus: drehen",
            "mouse-right": "Rechte Maus: verschieben",
            "mouse-scroll": "Scrollen: zoomen",
            "mouse-double": "Doppelklick: Vollbild",
            "x-elements": "Flächen-x-Elemente:",
            "z-elements": "Flächen-y-Elemente:",
            "spacing": "Abstand:",
            "taper": "Taper:",
            "uniform": "Uniform",
            "dolph-chebyshev": "Dolph-Chebyshev",
            "chebyshev-sll": "Chebyshev SLL:",
            "taper-note": "Chebyshev-Taper verändert Amplituden, nicht Phasen. Für ein 2D-Array nutzt diese Demo separierbare Gewichte: <span class=\"font-mono\">w(x,z)=w_x(x)·w_z(z)</span>. Mehr Elemente machen die Hauptkeule schmaler; Tapering kontrolliert vor allem Nebenkeulen.",
            "table-symbol": "Symbol",
            "table-definition": "Definition",
            "footer-html": "© 2026 phased-array-simulator.com – Phased Array Visualization <br>Open Source: <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#3b82f6; text-decoration:none;\">GitHub Repository</a> <br>Lukas Meienberger · <a href=\"mailto:lumeitech@gmail.com\" style=\"color:#3b82f6; text-decoration:none;\">lumeitech@gmail.com</a>",
            "practical-workflow-title": "Praktischer Ablauf: zuerst Quellen lösen, dann Felder kombinieren",
            "practical-workflow-desc": "Die hier gezeigte Methode ist der zweite Schritt: Sie berechnet Felder aus bekannten oder angenommenen äquivalenten Strömen. In realen Antennenprojekten werden diese Quellen oft zuerst aus Messungen oder Full-Wave-Methoden gewonnen; danach lassen sich viele Array-Elemente schnell durch Superposition kombinieren.",
            "practical-workflow-li-1": "FEM oder FDTD lösen Felder in einem Volumen; die Momentenmethode (MoM) löst meist Oberflächenströme über eine Integralgleichung.",
            "practical-workflow-li-2": "Sobald $J(\\vec r)$ bekannt ist, kann das Strahlungsintegral direkt ausgewertet werden, ohne MoM erneut zu lösen.",
            "practical-workflow-li-3": "Bei engen Arrays bleiben gegenseitige Kopplung und veränderte Elementströme wichtig. Als grobe Regel ist $\\lambda/2$ Abstand deutlich sicherer als $\\lambda/4$ für schwache Kopplung.",
            "mutual-coupling": "Gegenseitige Kopplung:",
            "coupling-strength": "Kopplungsschätzung:",
            "param-w": "$w_{n,p} \\propto J(\\vec r_{n,p})\\Delta S_p$: Gewicht des Subpatchs durch lokale Stromdichte und Fläche",
            "subpatch-accuracy-note": "Wichtig: Die Subpatch-Summe ist eine Huygens-/Stromquellen-Näherung. Sie wird genauer, wenn die Subpatches kleiner werden und wenn die lokale Stromverteilung $J(\\vec r)$ bekannt ist. In dieser Demo ist $J$ stark vereinfacht. Das optionale Kopplungsmodell verändert die Ströme der Antennenelemente, ist aber weiterhin keine Full-Wave-Lösung; echte Patch-Ströme, Substrat und starke Kopplung brauchen FEM/MoM/FDTD oder Messungen."
      },
      "fr": {
            "seo-title": "Simulateur 3D gratuit de réseau phasé pour le beamforming et la visualisation d’antennes",
            "seo-desc-1": "Explorez le pointage de faisceau d’un réseau phasé directement dans le navigateur. Cet outil RF interactif visualise la géométrie du réseau, l’espacement des éléments, la direction de pointage, les lobes 3D, le couplage mutuel simplifié et des modèles de champ de type Huygens/Fraunhofer à courants prescrits.",
            "seo-desc-2": "Le simulateur est conçu pour l’apprentissage et l’expérimentation : au lieu de s’appuyer seulement sur des diagrammes 2D fixes, il utilise des calculs de champ vectoriels pour montrer comment les éléments d’antenne se combinent en 3D.",
            "seo-start": "Lancer le simulateur",
            "seo-github": "Voir le code source sur GitHub",
            "keyword-phased-array-simulator": "simulateur de réseau phasé",
            "keyword-antenna-array-visualizer": "visualiseur de réseau d’antennes",
            "keyword-beamforming-tool": "outil de beamforming",
            "keyword-3d-radiation-pattern": "diagramme de rayonnement 3D",
            "keyword-rf-engineering": "ingénierie RF",
            "source-card": "Code source : consultez, forkez ou améliorez le projet sur <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
            "canvas-controls-summary": "Paramètres et commandes de la vue 3D",
            "mouse-controls-label": "Commandes 3D :",
            "mouse-left": "Souris gauche : rotation",
            "mouse-right": "Souris droite : déplacement",
            "mouse-scroll": "Molette : zoom",
            "mouse-double": "Double-clic : plein écran",
            "x-elements": "Éléments X :",
            "z-elements": "Éléments Z :",
            "spacing": "Espacement :",
            "taper": "Pondération :",
            "uniform": "Uniforme",
            "dolph-chebyshev": "Dolph-Chebyshev",
            "chebyshev-sll": "SLL Chebyshev :",
            "taper-note": "La pondération de Chebyshev modifie les amplitudes, pas les phases. Pour un réseau 2D, cette démo utilise des poids séparables : <span class=\"font-mono\">w(x,z)=w_x(x)·w_z(z)</span>. Plus d’éléments rendent le lobe principal plus étroit ; la pondération contrôle surtout les lobes secondaires.",
            "table-symbol": "Symbole",
            "table-definition": "Définition",
            "footer-html": "© 2026 phased-array-simulator.com – Phased Array Visualization <br>Open source : <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#3b82f6; text-decoration:none;\">GitHub Repository</a> <br>Lukas Meienberger · <a href=\"mailto:lumeitech@gmail.com\" style=\"color:#3b82f6; text-decoration:none;\">lumeitech@gmail.com</a>",
            "practical-workflow-title": "Flux pratique : résoudre les sources, puis combiner les champs",
            "practical-workflow-desc": "La méthode montrée ici est la deuxième étape : elle calcule les champs à partir de courants équivalents connus ou supposés. Dans de vrais projets d’antenne, ces sources sont souvent obtenues d’abord par mesure ou par une méthode full-wave, puis les éléments du réseau sont combinés rapidement par superposition.",
            "practical-workflow-li-1": "FEM ou FDTD résolvent les champs dans un volume ; la méthode des moments (MoM) résout généralement les courants de surface par une équation intégrale.",
            "practical-workflow-li-2": "Une fois $J(\\vec r)$ connu, l’intégrale de rayonnement peut être évaluée directement sans relancer MoM.",
            "practical-workflow-li-3": "Pour les réseaux compacts, le couplage mutuel et les courants modifiés restent importants. En règle générale, un espacement $\\lambda/2$ est plus sûr que $\\lambda/4$ pour un couplage faible.",
            "mutual-coupling": "Couplage mutuel :",
            "coupling-strength": "Estimation du couplage :",
            "param-w": "$w_{n,p} \\propto J(\\vec r_{n,p})\\Delta S_p$ : poids du sous-patch issu de la densité de courant locale et de la surface",
            "subpatch-accuracy-note": "Important : la somme des sous-patches est une approximation de type Huygens/source de courant. Elle s’améliore avec des sous-patches plus petits et lorsque la distribution locale $J(\\vec r)$ est connue. Dans cette démo, $J$ est fortement simplifié. Le modèle de couplage optionnel modifie le courant de chaque élément, mais ce n’est toujours pas une solution full-wave ; les vrais courants de patch, le substrat et le couplage fort nécessitent FEM/MoM/FDTD ou des mesures."
      },
      "es": {
            "seo-title": "Simulador 3D gratuito de phased array para beamforming y visualización de antenas",
            "seo-desc-1": "Explora la dirección de haz de un phased array directamente en el navegador. Esta herramienta interactiva de RF visualiza la geometría del array, el espaciado de elementos, la dirección de apuntamiento, lóbulos 3D, acoplamiento mutuo simplificado y modelos de campo tipo Huygens/Fraunhofer con corrientes prescritas.",
            "seo-desc-2": "El simulador está diseñado para aprender y experimentar: en vez de usar solo patrones 2D fijos, utiliza cálculos vectoriales de campo para mostrar cómo se combinan los elementos de antena en 3D.",
            "seo-start": "Iniciar el simulador",
            "seo-github": "Ver código fuente en GitHub",
            "keyword-phased-array-simulator": "simulador phased array",
            "keyword-antenna-array-visualizer": "visualizador de arrays de antenas",
            "keyword-beamforming-tool": "herramienta de beamforming",
            "keyword-3d-radiation-pattern": "patrón de radiación 3D",
            "keyword-rf-engineering": "ingeniería RF",
            "source-card": "Código fuente: consulta, bifurca o mejora el proyecto en <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
            "canvas-controls-summary": "Ajustes y controles de la vista 3D",
            "mouse-controls-label": "Controles 3D:",
            "mouse-left": "Ratón izquierdo: rotar",
            "mouse-right": "Ratón derecho: mover",
            "mouse-scroll": "Rueda: zoom",
            "mouse-double": "Doble clic: pantalla completa",
            "x-elements": "Elementos X:",
            "z-elements": "Elementos Z:",
            "spacing": "Espaciado:",
            "taper": "Ponderación:",
            "uniform": "Uniforme",
            "dolph-chebyshev": "Dolph-Chebyshev",
            "chebyshev-sll": "SLL Chebyshev:",
            "taper-note": "La ponderación Chebyshev cambia amplitudes, no fases. Para un array 2D esta demo usa pesos separables: <span class=\"font-mono\">w(x,z)=w_x(x)·w_z(z)</span>. Más elementos estrechan el lóbulo principal; la ponderación controla sobre todo los lóbulos laterales.",
            "table-symbol": "Símbolo",
            "table-definition": "Definición",
            "footer-html": "© 2026 phased-array-simulator.com – Phased Array Visualization <br>Código abierto: <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#3b82f6; text-decoration:none;\">GitHub Repository</a> <br>Lukas Meienberger · <a href=\"mailto:lumeitech@gmail.com\" style=\"color:#3b82f6; text-decoration:none;\">lumeitech@gmail.com</a>",
            "practical-workflow-title": "Flujo práctico: resolver fuentes y luego combinar campos",
            "practical-workflow-desc": "El método mostrado aquí es el segundo paso: calcula campos a partir de corrientes equivalentes conocidas o asumidas. En proyectos reales de antenas, esas fuentes suelen obtenerse primero mediante medición o métodos full-wave; después se combinan muchos elementos rápidamente por superposición.",
            "practical-workflow-li-1": "FEM o FDTD resuelven campos en un volumen; el Método de Momentos (MoM) normalmente resuelve corrientes superficiales mediante una ecuación integral.",
            "practical-workflow-li-2": "Una vez conocido $J(\\vec r)$, la integral de radiación puede evaluarse directamente sin volver a resolver MoM.",
            "practical-workflow-li-3": "En arrays compactos, el acoplamiento mutuo y los cambios de corriente siguen siendo importantes. Como regla aproximada, $\\lambda/2$ es más seguro que $\\lambda/4$ para acoplamiento débil.",
            "mutual-coupling": "Acoplamiento mutuo:",
            "coupling-strength": "Estimación de acoplamiento:",
            "param-w": "$w_{n,p} \\propto J(\\vec r_{n,p})\\Delta S_p$: peso del subparche por densidad de corriente local y área",
            "subpatch-accuracy-note": "Importante: la suma de subparches es una aproximación de Huygens/fuentes de corriente. Mejora con subparches más pequeños y cuando se conoce la distribución local $J(\\vec r)$. En esta demo $J$ está muy simplificada. El modelo opcional de acoplamiento modifica la corriente de cada elemento, pero sigue sin ser una solución full-wave; corrientes reales de patch, sustrato y acoplamiento fuerte requieren FEM/MoM/FDTD o mediciones."
      },
      "zh": {
            "seo-title": "免费 3D 相控阵模拟器：波束成形与天线阵列可视化",
            "seo-desc-1": "直接在浏览器中探索相控阵波束指向。这个交互式射频工程工具可视化天线阵列几何、阵元间距、指向方向、3D 辐射瓣、简化互耦以及规定电流的 Huygens/Fraunhofer 场模型。",
            "seo-desc-2": "该模拟器用于学习和实验：它不只依赖固定的 2D 天线方向图，而是使用基于矢量的场计算展示天线阵元如何在三维空间中叠加。",
            "seo-start": "启动模拟器",
            "seo-github": "在 GitHub 查看源代码",
            "keyword-phased-array-simulator": "相控阵模拟器",
            "keyword-antenna-array-visualizer": "天线阵列可视化",
            "keyword-beamforming-tool": "波束成形工具",
            "keyword-3d-radiation-pattern": "3D 辐射方向图",
            "keyword-rf-engineering": "射频工程",
            "source-card": "源代码：可在 <a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> 查看、fork 或改进项目。",
            "canvas-controls-summary": "3D 视图设置与控制",
            "mouse-controls-label": "3D 控制：",
            "mouse-left": "左键：旋转",
            "mouse-right": "右键：移动",
            "mouse-scroll": "滚轮：缩放",
            "mouse-double": "双击：全屏",
            "x-elements": "X 阵元：",
            "z-elements": "Z 阵元：",
            "spacing": "间距：",
            "taper": "加权：",
            "uniform": "均匀",
            "dolph-chebyshev": "Dolph-Chebyshev",
            "chebyshev-sll": "Chebyshev 旁瓣电平：",
            "taper-note": "Chebyshev 加权改变幅度而不是相位。对于 2D 阵列，本演示使用可分离权重：<span class=\"font-mono\">w(x,z)=w_x(x)·w_z(z)</span>。阵元越多，主瓣越窄；加权主要控制旁瓣。",
            "table-symbol": "符号",
            "table-definition": "定义",
            "footer-html": "© 2026 phased-array-simulator.com – Phased Array Visualization <br>开源：<a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#3b82f6; text-decoration:none;\">GitHub Repository</a> <br>Lukas Meienberger · <a href=\"mailto:lumeitech@gmail.com\" style=\"color:#3b82f6; text-decoration:none;\">lumeitech@gmail.com</a>",
            "practical-workflow-title": "实际流程：先求解源，再组合场",
            "practical-workflow-desc": "这里展示的方法是第二步：由已知或假设的等效电流计算场。在真实天线项目中，这些源通常先通过测量或全波方法获得，然后再用叠加快速组合多个阵元。",
            "practical-workflow-li-1": "FEM 或 FDTD 在体积中求解场；矩量法（MoM）通常通过积分方程求解表面电流。",
            "practical-workflow-li-2": "一旦已知 $J(\\vec r)$，就可以直接计算辐射积分，而不必再次求解 MoM。",
            "practical-workflow-li-3": "对于紧密阵列，互耦和变化的阵元电流仍然重要。粗略来说，$\\lambda/2$ 间距比 $\\lambda/4$ 更适合弱耦合。",
            "mutual-coupling": "互耦：",
            "coupling-strength": "耦合估计：",
            "param-w": "$w_{n,p} \\propto J(\\vec r_{n,p})\\Delta S_p$：由局部电流密度和面积得到的子面片权重",
            "subpatch-accuracy-note": "重要：子面片求和是 Huygens/电流源近似。子面片越小、局部电流分布 $J(\\vec r)$ 越准确，结果越好。在本演示中 $J$ 被大幅简化。可选互耦模型会修改每个天线阵元电流，但仍不是全波解；真实 patch 电流、基板效应和强互耦需要 FEM/MoM/FDTD 或测量。"
      },
      "ja": {
            "seo-title": "無料3Dフェーズドアレイシミュレータ：ビームフォーミングとアンテナアレイ可視化",
            "seo-desc-1": "ブラウザ上でフェーズドアレイのビームステアリングを確認できます。このRFエンジニアリング向けインタラクティブツールは、アンテナアレイ形状、素子間隔、ステアリング方向、3D放射ローブ、簡易相互結合、規定電流によるHuygens/Fraunhofer場モデルを可視化します。",
            "seo-desc-2": "このシミュレータは学習と実験向けです。固定された2Dアンテナパターンだけに頼らず、ベクトルベースの場計算でアンテナ素子が3D空間でどのように合成されるかを示します。",
            "seo-start": "シミュレータを開始",
            "seo-github": "GitHubでソースコードを見る",
            "keyword-phased-array-simulator": "フェーズドアレイシミュレータ",
            "keyword-antenna-array-visualizer": "アンテナアレイ可視化",
            "keyword-beamforming-tool": "ビームフォーミングツール",
            "keyword-3d-radiation-pattern": "3D放射パターン",
            "keyword-rf-engineering": "RFエンジニアリング",
            "source-card": "ソースコード：<a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> で閲覧、フォーク、改善できます。",
            "canvas-controls-summary": "3D表示設定と操作",
            "mouse-controls-label": "3D操作：",
            "mouse-left": "左クリック：回転",
            "mouse-right": "右クリック：移動",
            "mouse-scroll": "スクロール：ズーム",
            "mouse-double": "ダブルクリック：全画面",
            "x-elements": "X素子：",
            "z-elements": "Z素子：",
            "spacing": "間隔：",
            "taper": "テーパー：",
            "uniform": "均一",
            "dolph-chebyshev": "Dolph-Chebyshev",
            "chebyshev-sll": "Chebyshev SLL：",
            "taper-note": "Chebyshevテーパーは位相ではなく振幅を変えます。2Dアレイでは、このデモは分離可能な重み <span class=\"font-mono\">w(x,z)=w_x(x)·w_z(z)</span> を使います。素子数が増えると主ローブは狭くなり、テーパーは主にサイドローブを制御します。",
            "table-symbol": "記号",
            "table-definition": "定義",
            "footer-html": "© 2026 phased-array-simulator.com – Phased Array Visualization <br>オープンソース：<a href=\"https://github.com/luumei/phased-array-visualizer\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#3b82f6; text-decoration:none;\">GitHub Repository</a> <br>Lukas Meienberger · <a href=\"mailto:lumeitech@gmail.com\" style=\"color:#3b82f6; text-decoration:none;\">lumeitech@gmail.com</a>",
            "practical-workflow-title": "実用的な流れ：まず源を解き、その後に場を合成",
            "practical-workflow-desc": "ここで示す方法は第2段階です。既知または仮定した等価電流から場を計算します。実際のアンテナ設計では、これらの源は測定や全波解析で先に求められ、その後、多数のアレイ素子を重ね合わせで高速に合成します。",
            "practical-workflow-li-1": "FEMやFDTDは体積内の場を解きます。モーメント法（MoM）は通常、積分方程式で表面電流を解きます。",
            "practical-workflow-li-2": "$J(\\vec r)$ が分かれば、MoMを再度解かずに放射積分を直接評価できます。",
            "practical-workflow-li-3": "近接したアレイでは、相互結合と変化した素子電流が重要です。経験則として、弱い結合には $\\lambda/4$ より $\\lambda/2$ 間隔の方が安全です。",
            "mutual-coupling": "相互結合：",
            "coupling-strength": "結合の推定：",
            "param-w": "$w_{n,p} \\propto J(\\vec r_{n,p})\\Delta S_p$：局所電流密度と面積によるサブパッチ重み",
            "subpatch-accuracy-note": "重要：サブパッチ和はHuygens/電流源近似です。サブパッチを小さくし、局所電流分布 $J(\\vec r)$ が分かっているほど改善します。このデモでは $J$ を大きく単純化しています。オプションの結合モデルは各アンテナ素子電流を変更しますが、全波解ではありません。実際のパッチ電流、基板効果、強い相互結合にはFEM/MoM/FDTDまたは測定が必要です。"
      }
};
    Object.keys(translationPatches).forEach(lang => {
      translations[lang] = Object.assign({}, translations[lang] || {}, translationPatches[lang]);
    });

    const seoRankingTranslationPatches = {
      "en": {
            "title": "Phased Array Simulator – 3D Beamforming Tool",
            "seo-title": "Phased Array Simulator – 3D Beamforming & Antenna Tool",
            "seo-learning-title": "What is a phased array simulator?",
            "seo-learning-p1": "A phased array simulator is an interactive tool for visualizing how multiple antenna elements combine their electromagnetic fields. By changing phase shifts, steering angle, element spacing and amplitude taper, you can see how the main beam, sidelobes, nulls and radiation pattern change in 3D.",
            "seo-learning-p2": "This browser-based antenna array simulator is useful for students, RF engineers and makers who want to understand beamforming without starting with a full electromagnetic solver. The visualization connects the array factor, Fraunhofer far-field approximation and simplified prescribed-current Huygens-style field model in one place.",
            "seo-beamforming-title": "Beamforming and steering",
            "seo-beamforming-p": "Beamforming works by applying a progressive phase shift to each antenna element. Mathematically this phase is based on the projection of the element position onto the steering direction. In the desired direction, the geometric phase differences cancel and the fields add constructively.",
            "seo-spacing-title": "Element spacing and grating lobes",
            "seo-spacing-p": "Element spacing strongly affects the array pattern. Around half-wavelength spacing is commonly used because it helps avoid strong grating lobes, while very small spacing increases mutual coupling and changes the real element currents.",
            "seo-db-title": "Linear and dB radiation patterns",
            "seo-db-p": "Linear scale is intuitive for beginners, while normalized dB scale makes sidelobes and nulls easier to compare. For field amplitude the correct form is 20 log10(|AF|/max|AF|); for power it is 10 log10(P/Pmax).",
            "seo-use-title": "What you can test with this tool",
            "seo-use-li-1": "Visualize phased array beam steering in 3D.",
            "seo-use-li-2": "Compare field amplitude |E| and power/intensity |E|².",
            "seo-use-li-3": "Switch between linear and normalized dB display.",
            "seo-use-li-4": "Explore array factor behavior, sidelobes, nulls and tapering.",
            "seo-use-li-5": "Compare Fraunhofer far-field behavior with a simplified finite-distance Huygens-style model."
      },
      "de": {
            "title": "Phased Array Simulator – 3D Beamforming Tool",
            "seo-title": "Phased Array Simulator – 3D Beamforming & Antennen-Tool",
            "seo-learning-title": "Was ist ein Phased-Array-Simulator?",
            "seo-learning-p1": "Ein Phased-Array-Simulator ist ein interaktives Tool, das zeigt, wie mehrere Antennenelemente ihre elektromagnetischen Felder überlagern. Durch Änderung von Phasenverschiebung, Lenkwinkel, Elementabstand und Amplituden-Taper sieht man direkt, wie Hauptkeule, Nebenkeulen, Nullstellen und 3D-Strahlungsdiagramm entstehen.",
            "seo-learning-p2": "Dieser browserbasierte Antennenarray-Simulator ist hilfreich für Studierende, RF-Ingenieure und Maker, die Beamforming verstehen möchten, ohne direkt mit einem vollständigen elektromagnetischen Solver zu starten. Die Visualisierung verbindet Array-Faktor, Fraunhofer-Fernfeldnäherung und ein vereinfachtes vorgeschriebenes Huygens-Stromquellenmodell.",
            "seo-beamforming-title": "Beamforming und Steering",
            "seo-beamforming-p": "Beamforming funktioniert durch eine progressive Phasenverschiebung an jedem Antennenelement. In der gewünschten Lenkrichtung addieren sich die Felder konstruktiv, in anderen Richtungen teilweise destruktiv. Dadurch entsteht ein gerichtetes 3D-Strahlungsdiagramm.",
            "seo-spacing-title": "Elementabstand und Grating Lobes",
            "seo-spacing-p": "Der Elementabstand beeinflusst das Array-Pattern stark. Ein Abstand um eine halbe Wellenlänge wird häufig verwendet, weil er starke Grating Lobes vermeidet. Sehr kleiner Abstand erhöht dagegen gegenseitige Kopplung und verändert reale Elementströme.",
            "seo-db-title": "Lineare und dB-Strahlungsdiagramme",
            "seo-db-p": "Die lineare Skala ist für Einsteiger intuitiv. Die normalisierte dB-Skala macht Nebenkeulen und Nullstellen besser vergleichbar. Für Feldamplitude ist die korrekte Form 20 log10(|AF|/max|AF|); für Leistung 10 log10(P/Pmax).",
            "seo-use-title": "Was du mit diesem Tool testen kannst",
            "seo-use-li-1": "Phased-Array-Beam-Steering in 3D visualisieren.",
            "seo-use-li-2": "Feldamplitude |E| und Leistung/Intensität |E|² vergleichen.",
            "seo-use-li-3": "Zwischen linearer und normalisierter dB-Darstellung wechseln.",
            "seo-use-li-4": "Array-Faktor, Nebenkeulen, Nullstellen und Tapering untersuchen.",
            "seo-use-li-5": "Fraunhofer-Fernfeld mit einem vereinfachten Huygens-Modell bei endlicher Distanz vergleichen."
      },
      "fr": {
            "title": "Simulateur Phased Array – Outil 3D Beamforming",
            "seo-title": "Simulateur Phased Array – Beamforming 3D & outil d’antenne",
            "seo-learning-title": "Qu’est-ce qu’un simulateur de réseau phasé ?",
            "seo-learning-p1": "Un simulateur de réseau phasé est un outil interactif qui visualise comment plusieurs éléments d’antenne combinent leurs champs électromagnétiques. En modifiant les déphasages, l’angle de pointage, l’espacement des éléments et la pondération d’amplitude, on observe en 3D le lobe principal, les lobes secondaires, les zéros et le diagramme de rayonnement.",
            "seo-learning-p2": "Ce simulateur d’antenne en ligne est utile pour les étudiants, ingénieurs RF et makers qui veulent comprendre le beamforming sans commencer par un solveur électromagnétique complet. Il relie le facteur de réseau, l’approximation de Fraunhofer et un modèle Huygens simplifié à courants prescrits.",
            "seo-beamforming-title": "Beamforming et pointage",
            "seo-beamforming-p": "Le beamforming applique un déphasage progressif à chaque élément d’antenne. Les champs s’additionnent constructivement dans la direction voulue et destructivement ailleurs, créant un diagramme de rayonnement 3D directionnel.",
            "seo-spacing-title": "Espacement des éléments et lobes de réseau",
            "seo-spacing-p": "L’espacement des éléments influence fortement le diagramme. Un espacement d’environ une demi-longueur d’onde est courant car il limite les lobes de réseau forts, tandis qu’un espacement très faible augmente le couplage mutuel et modifie les courants réels.",
            "seo-db-title": "Diagrammes linéaires et en dB",
            "seo-db-p": "L’échelle linéaire est intuitive pour les débutants, tandis que l’échelle dB normalisée rend les lobes secondaires et les zéros plus faciles à comparer. Pour l’amplitude de champ : 20 log10(|AF|/max|AF|); pour la puissance : 10 log10(P/Pmax).",
            "seo-use-title": "Ce que vous pouvez tester",
            "seo-use-li-1": "Visualiser le pointage de faisceau d’un réseau phasé en 3D.",
            "seo-use-li-2": "Comparer l’amplitude de champ |E| et la puissance/intensité |E|².",
            "seo-use-li-3": "Basculer entre affichage linéaire et dB normalisé.",
            "seo-use-li-4": "Explorer facteur de réseau, lobes secondaires, zéros et pondération.",
            "seo-use-li-5": "Comparer le champ lointain de Fraunhofer avec un modèle Huygens simplifié à distance finie."
      },
      "es": {
            "title": "Simulador Phased Array – Herramienta 3D Beamforming",
            "seo-title": "Simulador Phased Array – Beamforming 3D y herramienta de antenas",
            "seo-learning-title": "¿Qué es un simulador phased array?",
            "seo-learning-p1": "Un simulador phased array es una herramienta interactiva para visualizar cómo varios elementos de antena combinan sus campos electromagnéticos. Al cambiar fases, ángulo de apuntamiento, espaciado y taper de amplitud, se ve cómo cambian el lóbulo principal, los lóbulos laterales, los nulos y el patrón de radiación 3D.",
            "seo-learning-p2": "Este simulador de arrays de antenas en navegador ayuda a estudiantes, ingenieros RF y makers a entender el beamforming sin empezar con un solver electromagnético completo. Conecta el factor de array, la aproximación de Fraunhofer y un modelo Huygens simplificado de corrientes prescritas.",
            "seo-beamforming-title": "Beamforming y apuntamiento",
            "seo-beamforming-p": "El beamforming aplica un desfase progresivo a cada elemento. Los campos se suman constructivamente en la dirección deseada y destructivamente en otras direcciones, creando un patrón de radiación 3D direccional.",
            "seo-spacing-title": "Espaciado y grating lobes",
            "seo-spacing-p": "El espaciado de elementos afecta fuertemente al patrón. Un espaciado cercano a media longitud de onda se usa a menudo porque ayuda a evitar grating lobes fuertes, mientras que un espaciado muy pequeño aumenta el acoplamiento mutuo.",
            "seo-db-title": "Patrones lineales y en dB",
            "seo-db-p": "La escala lineal es intuitiva para principiantes, mientras que la escala dB normalizada facilita comparar lóbulos laterales y nulos. Para amplitud de campo: 20 log10(|AF|/max|AF|); para potencia: 10 log10(P/Pmax).",
            "seo-use-title": "Qué puedes probar con esta herramienta",
            "seo-use-li-1": "Visualizar beam steering de phased arrays en 3D.",
            "seo-use-li-2": "Comparar amplitud de campo |E| y potencia/intensidad |E|².",
            "seo-use-li-3": "Cambiar entre escala lineal y dB normalizado.",
            "seo-use-li-4": "Explorar factor de array, lóbulos laterales, nulos y tapering.",
            "seo-use-li-5": "Comparar Fraunhofer con un modelo Huygens simplificado a distancia finita."
      },
      "zh": {
            "title": "相控阵模拟器 – 3D 波束成形工具",
            "seo-title": "相控阵模拟器 – 3D 波束成形与天线工具",
            "seo-learning-title": "什么是相控阵模拟器？",
            "seo-learning-p1": "相控阵模拟器是一种交互式工具，用于可视化多个天线阵元如何叠加电磁场。通过改变相移、指向角、阵元间距和幅度加权，可以在 3D 中看到主瓣、旁瓣、零点和辐射方向图的变化。",
            "seo-learning-p2": "这个基于浏览器的天线阵列模拟器适合学生、射频工程师和创客理解波束成形，而不必一开始就使用完整的电磁求解器。它把阵列因子、Fraunhofer 远场近似和简化的规定电流 Huygens 模型连接在一起。",
            "seo-beamforming-title": "波束成形与指向",
            "seo-beamforming-p": "波束成形通过给每个天线阵元施加递进相移实现。电磁场在目标方向相长叠加，在其他方向部分相消，从而形成定向的 3D 辐射方向图。",
            "seo-spacing-title": "阵元间距与栅瓣",
            "seo-spacing-p": "阵元间距会强烈影响阵列方向图。约半波长间距常用于避免强栅瓣，而非常小的间距会增加互耦并改变真实阵元电流。",
            "seo-db-title": "线性和 dB 辐射方向图",
            "seo-db-p": "线性刻度对初学者直观；归一化 dB 刻度更容易比较旁瓣和零点。场幅度使用 20 log10(|AF|/max|AF|)，功率使用 10 log10(P/Pmax)。",
            "seo-use-title": "你可以用这个工具测试什么",
            "seo-use-li-1": "在 3D 中可视化相控阵波束指向。",
            "seo-use-li-2": "比较场幅度 |E| 和功率/强度 |E|²。",
            "seo-use-li-3": "在线性和归一化 dB 显示之间切换。",
            "seo-use-li-4": "探索阵列因子、旁瓣、零点和加权。",
            "seo-use-li-5": "比较 Fraunhofer 远场与有限距离的简化 Huygens 模型。"
      },
      "ja": {
            "title": "フェーズドアレイシミュレータ – 3Dビームフォーミングツール",
            "seo-title": "フェーズドアレイシミュレータ – 3Dビームフォーミングとアンテナツール",
            "seo-learning-title": "フェーズドアレイシミュレータとは？",
            "seo-learning-p1": "フェーズドアレイシミュレータは、複数のアンテナ素子が電磁界をどのように合成するかを可視化するインタラクティブツールです。位相シフト、ステアリング角、素子間隔、振幅テーパーを変更すると、主ローブ、サイドローブ、ヌル、3D放射パターンの変化を確認できます。",
            "seo-learning-p2": "このブラウザベースのアンテナアレイシミュレータは、完全な電磁界ソルバーから始めなくてもビームフォーミングを理解したい学生、RFエンジニア、メーカーに役立ちます。アレイファクター、Fraunhofer遠方界近似、簡略化された規定電流Huygensモデルを一つの表示でつなぎます。",
            "seo-beamforming-title": "ビームフォーミングとステアリング",
            "seo-beamforming-p": "ビームフォーミングは各アンテナ素子に進行的な位相シフトを与えることで機能します。希望方向では電界が強め合い、他の方向では弱め合うため、指向性のある3D放射パターンが形成されます。",
            "seo-spacing-title": "素子間隔とグレーティングローブ",
            "seo-spacing-p": "素子間隔はアレイパターンに大きく影響します。半波長程度の間隔は強いグレーティングローブを避けやすいため一般的です。一方、非常に小さい間隔では相互結合が増え、実際の素子電流が変化します。",
            "seo-db-title": "線形表示とdB放射パターン",
            "seo-db-p": "線形スケールは初心者に直感的です。正規化dBスケールはサイドローブやヌルを比較しやすくします。電界振幅では 20 log10(|AF|/max|AF|)、電力では 10 log10(P/Pmax) を使います。",
            "seo-use-title": "このツールで試せること",
            "seo-use-li-1": "フェーズドアレイのビームステアリングを3Dで可視化する。",
            "seo-use-li-2": "電界振幅 |E| と電力/強度 |E|² を比較する。",
            "seo-use-li-3": "線形表示と正規化dB表示を切り替える。",
            "seo-use-li-4": "アレイファクター、サイドローブ、ヌル、テーパーを調べる。",
            "seo-use-li-5": "Fraunhofer遠方界と有限距離の簡略Huygensモデルを比較する。"
      }
};
    Object.keys(seoRankingTranslationPatches).forEach(lang => {
      translations[lang] = Object.assign({}, translations[lang] || {}, seoRankingTranslationPatches[lang]);
    });


    const themeTranslationPatches = {
      de: { "theme-label": "Darstellung:", "theme-system": "System", "theme-light": "Hell", "theme-dark": "Dunkel", "canvas-theme-label": "3D-Hintergrund:", "canvas-theme-auto": "Auto", "canvas-theme-light": "Hell", "canvas-theme-dark": "Dunkel" },
      en: { "theme-label": "Appearance:", "theme-system": "System", "theme-light": "Light", "theme-dark": "Dark", "canvas-theme-label": "3D background:", "canvas-theme-auto": "Auto", "canvas-theme-light": "Light", "canvas-theme-dark": "Dark" },
      fr: { "theme-label": "Apparence :", "theme-system": "Système", "theme-light": "Clair", "theme-dark": "Sombre", "canvas-theme-label": "Fond 3D :", "canvas-theme-auto": "Auto", "canvas-theme-light": "Clair", "canvas-theme-dark": "Sombre" },
      es: { "theme-label": "Apariencia:", "theme-system": "Sistema", "theme-light": "Claro", "theme-dark": "Oscuro", "canvas-theme-label": "Fondo 3D:", "canvas-theme-auto": "Auto", "canvas-theme-light": "Claro", "canvas-theme-dark": "Oscuro" },
      zh: { "theme-label": "外观：", "theme-system": "系统", "theme-light": "浅色", "theme-dark": "深色", "canvas-theme-label": "3D背景：", "canvas-theme-auto": "自动", "canvas-theme-light": "浅色", "canvas-theme-dark": "深色" },
      ja: { "theme-label": "表示：", "theme-system": "システム", "theme-light": "ライト", "theme-dark": "ダーク", "canvas-theme-label": "3D背景：", "canvas-theme-auto": "自動", "canvas-theme-light": "ライト", "canvas-theme-dark": "ダーク" }
    };
    Object.keys(themeTranslationPatches).forEach(lang => {
      translations[lang] = Object.assign({}, translations[lang] || {}, themeTranslationPatches[lang]);
    });

    const powerTheoryPatches = {
      de: {
        "field-quantity-label": "Darstellung:",
        "field-power": "Leistung / Intensität |E|²",
        "field-amplitude": "Feldamplitude |E|",
        "displayed-field-value": "Angezeigter Feldwert:",
        "phasor-power-title": "Komplexe Feldamplitude, Realfeld und Leistung",
        "phasor-power-desc-1": "Die Simulation rechnet mit der komplexen Feldamplitude $\\tilde E(\\vec R)$. Das ist kein zusätzlicher physikalischer Anteil, sondern ein Phasor: Betrag und Phase werden zusammen gespeichert. Das reale zeitabhängige Feld erhält man als Realteil.",
        "phasor-power-desc-2": "Für ein stabiles Antennendiagramm schaut man normalerweise nicht auf die momentane Cosinus-Schwingung, sondern auf die zeitlich gemittelte Stärke. Der Mittelwert des Feldes selbst wäre null; der Mittelwert des Quadrats ist proportional zur Leistung.",
        "phasor-power-desc-3": "Darum ist im Simulator standardmäßig Leistung / Intensität $|\\tilde E|^2$ ausgewählt. Die Alternative Feldamplitude $|\\tilde E|$ zeigt dieselben Maxima und Nullstellen, aber mit anderer Skalierung.",
        "phasor-power-li-1": "$|\\tilde E|$ = Feldamplitude: gut für eine weiche visuelle Darstellung.",
        "phasor-power-li-2": "$|\\tilde E|^2$ = Power Pattern / Intensität: Standard für Antennendiagramme.",
        "phasor-power-li-3": "Der Faktor $1/R$ betrifft die Feldamplitude; die Leistung fällt wie $1/R^2$. Bei normalisierten Patterns wird dieser globale Abstandsfaktor entfernt."
      },
      en: {
        "field-quantity-label": "Displayed quantity:",
        "field-power": "Power / intensity |E|²",
        "field-amplitude": "Field amplitude |E|",
        "displayed-field-value": "Displayed field value:",
        "phasor-power-title": "Complex field amplitude, real field, and power",
        "phasor-power-desc-1": "The simulation computes the complex field amplitude $\\tilde E(\\vec R)$. This is not extra physics; it is a phasor that stores amplitude and phase together. The real time-dependent field is obtained by taking the real part.",
        "phasor-power-desc-2": "For a stable antenna pattern, we normally do not plot the instantaneous cosine oscillation. We plot the time-averaged strength. The average field itself is zero, but the average squared field is proportional to power.",
        "phasor-power-desc-3": "Therefore the simulator defaults to power / intensity $|\\tilde E|^2$. The alternative field amplitude $|\\tilde E|$ has the same maxima and nulls, but a different visual scaling.",
        "phasor-power-li-1": "$|\\tilde E|$ = field amplitude: useful for a smoother visual shape.",
        "phasor-power-li-2": "$|\\tilde E|^2$ = power pattern / intensity: standard for antenna diagrams.",
        "phasor-power-li-3": "The factor $1/R$ affects field amplitude; power falls as $1/R^2$. In normalized patterns this global distance factor is removed."
      }
    };
    ['fr','es','zh','ja'].forEach(lang => { powerTheoryPatches[lang] = powerTheoryPatches.en; });
    Object.keys(powerTheoryPatches).forEach(lang => {
      translations[lang] = Object.assign({}, translations[lang] || {}, powerTheoryPatches[lang]);
    });


    const dbScaleTranslationPatches = {
      de: {
        "display-scale-label": "Skala:", "scale-linear": "Linear", "scale-db": "dB (normalisiert)",
        "db-scale-title": "dB-Darstellung für Antennendiagramme",
        "db-scale-desc-1": "Die dB-Darstellung ist nützlich, weil Nebenkeulen und Nullstellen sichtbar bleiben, auch wenn der Hauptstrahl viel stärker ist. Sie wird normalisiert: der stärkste Punkt des aktuellen Patterns ist 0 dB.",
        "db-scale-desc-2": "Wichtig ist die Unterscheidung zwischen Feldamplitude und Leistung. Für komplexe Feldsummen verwendet man $20\\log_{10}(|AF|/|AF|_{max})$. Für Leistung verwendet man $10\\log_{10}(P/P_{max})$. Da $P\\propto |AF|^2$ gilt, ergibt beides nach der Normalisierung dieselben dB-Werte.",
        "db-scale-li-1": "0 dB bedeutet: stärkste Richtung im aktuellen Pattern.",
        "db-scale-li-2": "-20 dB bedeutet: 10× kleinere Feldamplitude bzw. 100× kleinere Leistung.",
        "db-scale-li-3": "Die Anzeige wird bei -40 dB abgeschnitten, damit die 3D-Grafik stabil und gut lesbar bleibt."
      },
      en: {
        "display-scale-label": "Scale:", "scale-linear": "Linear", "scale-db": "dB (normalized)",
        "db-scale-title": "dB display for antenna patterns",
        "db-scale-desc-1": "The dB display is useful because sidelobes and nulls remain visible even when the main beam is much stronger. It is normalized: the strongest point of the current pattern is 0 dB.",
        "db-scale-desc-2": "The key point is the difference between field amplitude and power. For complex field sums use $20\\log_{10}(|AF|/|AF|_{max})$. For power use $10\\log_{10}(P/P_{max})$. Since $P\\propto |AF|^2$, both give the same normalized dB values.",
        "db-scale-li-1": "0 dB means the strongest direction in the current pattern.",
        "db-scale-li-2": "-20 dB means 10× lower field amplitude or 100× lower power.",
        "db-scale-li-3": "The display is clipped at -40 dB so the 3D graphic stays stable and readable."
      },
      fr: {
        "display-scale-label": "Échelle :", "scale-linear": "Linéaire", "scale-db": "dB (normalisé)",
        "db-scale-title": "Affichage en dB pour les diagrammes d’antenne",
        "db-scale-desc-1": "L’affichage en dB est utile car les lobes secondaires et les zéros restent visibles même lorsque le lobe principal est beaucoup plus fort. Il est normalisé : le point le plus fort du diagramme actuel vaut 0 dB.",
        "db-scale-desc-2": "Le point important est la différence entre amplitude de champ et puissance. Pour une somme complexe de champ, on utilise $20\\log_{10}(|AF|/|AF|_{max})$. Pour la puissance, on utilise $10\\log_{10}(P/P_{max})$. Comme $P\\propto |AF|^2$, les deux donnent les mêmes valeurs en dB après normalisation.",
        "db-scale-li-1": "0 dB signifie la direction la plus forte du diagramme actuel.",
        "db-scale-li-2": "-20 dB signifie une amplitude de champ 10× plus faible ou une puissance 100× plus faible.",
        "db-scale-li-3": "L’affichage est limité à -40 dB afin que la vue 3D reste stable et lisible."
      },
      es: {
        "display-scale-label": "Escala:", "scale-linear": "Lineal", "scale-db": "dB (normalizado)",
        "db-scale-title": "Visualización en dB para diagramas de antena",
        "db-scale-desc-1": "La visualización en dB es útil porque los lóbulos secundarios y los nulos siguen siendo visibles aunque el lóbulo principal sea mucho más fuerte. Está normalizada: el punto más fuerte del patrón actual es 0 dB.",
        "db-scale-desc-2": "Lo importante es distinguir entre amplitud de campo y potencia. Para sumas complejas de campo se usa $20\\log_{10}(|AF|/|AF|_{max})$. Para potencia se usa $10\\log_{10}(P/P_{max})$. Como $P\\propto |AF|^2$, ambas formas dan los mismos valores normalizados en dB.",
        "db-scale-li-1": "0 dB significa la dirección más fuerte del patrón actual.",
        "db-scale-li-2": "-20 dB significa una amplitud de campo 10× menor o una potencia 100× menor.",
        "db-scale-li-3": "La visualización se recorta en -40 dB para que la gráfica 3D sea estable y legible."
      },
      zh: {
        "display-scale-label": "刻度：", "scale-linear": "线性", "scale-db": "dB（归一化）",
        "db-scale-title": "天线方向图的 dB 显示",
        "db-scale-desc-1": "dB 显示很有用，因为即使主瓣强很多，旁瓣和零点仍然可见。这里采用归一化：当前方向图中最强的点为 0 dB。",
        "db-scale-desc-2": "关键是区分场幅度和功率。对于复数场求和，使用 $20\\log_{10}(|AF|/|AF|_{max})$。对于功率，使用 $10\\log_{10}(P/P_{max})$。由于 $P\\propto |AF|^2$，归一化后两者给出相同的 dB 值。",
        "db-scale-li-1": "0 dB 表示当前方向图中的最强方向。",
        "db-scale-li-2": "-20 dB 表示场幅度小 10 倍，或功率小 100 倍。",
        "db-scale-li-3": "显示在 -40 dB 处截断，使 3D 图形保持稳定且易读。"
      },
      ja: {
        "display-scale-label": "スケール：", "scale-linear": "線形", "scale-db": "dB（正規化）",
        "db-scale-title": "アンテナパターンの dB 表示",
        "db-scale-desc-1": "dB 表示は、主ローブが非常に強い場合でもサイドローブやヌルを見やすくするために有用です。ここでは正規化され、現在のパターンで最も強い点が 0 dB になります。",
        "db-scale-desc-2": "重要なのは、電界振幅と電力を区別することです。複素電界和では $20\\log_{10}(|AF|/|AF|_{max})$ を使います。電力では $10\\log_{10}(P/P_{max})$ を使います。$P\\propto |AF|^2$ なので、正規化後は同じ dB 値になります。",
        "db-scale-li-1": "0 dB は現在のパターンで最も強い方向を意味します。",
        "db-scale-li-2": "-20 dB は電界振幅が 10 分の 1、または電力が 100 分の 1 であることを意味します。",
        "db-scale-li-3": "3D 表示を安定して読みやすくするため、表示は -40 dB でクリップされます。"
      }
    };
    Object.keys(dbScaleTranslationPatches).forEach(lang => {
      translations[lang] = Object.assign({}, translations[lang] || {}, dbScaleTranslationPatches[lang]);
    });


    const steeringConventionPatches = {"en": {"seo-beamforming-p": "Beamforming works by applying a progressive phase shift to each antenna element. Mathematically, this phase is based on the scalar product between the element position and the steering direction: it is the projection of the element onto the desired wave direction. In the desired direction, the geometric phase differences cancel and the fields add constructively.", "beam-steering-desc": "Beam steering is based on the far-field distance approximation. For an element at position $\\vec r_n$, the observation-direction projection $\\hat d\\cdot\\vec r_n$ determines the relative path difference and therefore the relative phase. In the convention used on this page, the propagation contribution is $e^{-ik(\\hat d\\cdot\\vec r_n)}$ and the steering excitation is chosen as $e^{+ik(\\vec r_n\\cdot\\hat s)}$.", "steering-phase-formula": "Steering phase used in this simulator:", "combined-element-response-formula": "Propagation phase plus steering phase:", "steering-tip": "If the observation direction equals the steering direction, $\\hat d=\\hat s$, the exponent becomes zero for every element. All elements are then in phase in that direction, so the fields add constructively and the main beam points there. In other directions the remaining phase terms do not align and the field is reduced.", "steering-convention-title": "Sign convention note:", "steering-convention-desc": "The plus/minus signs are not arbitrary mistakes; they follow from the chosen wave convention. This page uses the common engineering phasor convention $E(t)=\\operatorname{Re}\\{\\tilde E e^{i\\omega t}\\}$ together with an outgoing Green function proportional to $e^{ikR}/R$. With the opposite time convention, many books write all propagation and steering signs flipped. Both forms are physically equivalent as long as propagation and steering use the same convention consistently."}, "de": {"seo-beamforming-p": "Beamforming funktioniert durch eine progressive Phasenverschiebung an jedem Antennenelement. Mathematisch basiert diese Phase auf dem Skalarprodukt zwischen Elementposition und Lenkrichtung: Es ist die Projektion des Elements auf die gewünschte Ausbreitungsrichtung. In der Zielrichtung heben sich die geometrischen Phasendifferenzen auf und die Felder addieren sich konstruktiv.", "beam-steering-desc": "Beam Steering folgt direkt aus der Fernfeld-Abstandsapproximation. Für ein Element an Position $\\vec r_n$ bestimmt die Projektion $\\hat d\\cdot\\vec r_n$ den relativen Wegunterschied und damit die relative Phase. In der auf dieser Seite verwendeten Konvention ist der Ausbreitungsbeitrag $e^{-ik(\\hat d\\cdot\\vec r_n)}$ und die Steering-Anregung wird als $e^{+ik(\\vec r_n\\cdot\\hat s)}$ gewählt.", "steering-phase-formula": "Im Simulator verwendete Steering-Phase:", "combined-element-response-formula": "Ausbreitungsphase plus Steering-Phase:", "steering-tip": "Wenn Beobachtungsrichtung und Lenkrichtung gleich sind, also $\\hat d=\\hat s$, wird der Exponent für jedes Element null. Dann sind alle Elemente in dieser Richtung in Phase, die Felder addieren sich konstruktiv und der Hauptstrahl zeigt dorthin. In anderen Richtungen bleiben Phasenunterschiede übrig und das Feld wird kleiner.", "steering-convention-title": "Hinweis zur Vorzeichenkonvention:", "steering-convention-desc": "Die Plus-/Minuszeichen sind keine willkürlichen Fehler, sondern folgen aus der gewählten Wellenkonvention. Diese Seite verwendet die übliche Engineering-Phasor-Konvention $E(t)=\\operatorname{Re}\\{\\tilde E e^{i\\omega t}\\}$ zusammen mit einer auslaufenden Greenschen Funktion proportional zu $e^{ikR}/R$. Mit der entgegengesetzten Zeitkonvention schreiben viele Bücher alle Ausbreitungs- und Steering-Vorzeichen gespiegelt. Beide Formen sind physikalisch äquivalent, solange Ausbreitung und Steering konsistent dieselbe Konvention verwenden."}, "fr": {"seo-beamforming-p": "Le beamforming applique un déphasage progressif à chaque élément d’antenne. Mathématiquement, cette phase vient du produit scalaire entre la position de l’élément et la direction de pointage : c’est la projection de l’élément sur la direction de propagation voulue. Dans cette direction, les différences de phase géométriques s’annulent et les champs s’additionnent.", "beam-steering-desc": "Le pointage du faisceau vient directement de l’approximation de distance en champ lointain. Pour un élément en position $\\vec r_n$, la projection $\\hat d\\cdot\\vec r_n$ détermine la différence de trajet relative et donc la phase relative. Dans la convention utilisée ici, la propagation contribue par $e^{-ik(\\hat d\\cdot\\vec r_n)}$ et l’excitation de pointage est choisie comme $e^{+ik(\\vec r_n\\cdot\\hat s)}$.", "steering-phase-formula": "Phase de pointage utilisée dans ce simulateur :", "combined-element-response-formula": "Phase de propagation plus phase de pointage :", "steering-tip": "Si la direction d’observation est égale à la direction de pointage, $\\hat d=\\hat s$, l’exposant devient nul pour chaque élément. Tous les éléments sont alors en phase dans cette direction, les champs s’additionnent constructivement et le lobe principal pointe là.", "steering-convention-title": "Note sur la convention de signe :", "steering-convention-desc": "Les signes plus/moins ne sont pas des erreurs arbitraires ; ils suivent la convention d’onde choisie. Cette page utilise la convention de phaseur $E(t)=\\operatorname{Re}\\{\\tilde E e^{i\\omega t}\\}$ avec une fonction de Green sortante proportionnelle à $e^{ikR}/R$. Avec la convention temporelle opposée, de nombreux livres écrivent tous les signes de propagation et de pointage inversés. Les deux formes sont équivalentes si la convention est utilisée de façon cohérente."}, "es": {"seo-beamforming-p": "El beamforming aplica un desfase progresivo a cada elemento de antena. Matemáticamente, esta fase se basa en el producto escalar entre la posición del elemento y la dirección de apuntamiento: es la proyección del elemento sobre la dirección deseada de propagación. En esa dirección, las diferencias geométricas de fase se cancelan y los campos se suman constructivamente.", "beam-steering-desc": "El apuntamiento del haz sale directamente de la aproximación de distancia en campo lejano. Para un elemento en la posición $\\vec r_n$, la proyección $\\hat d\\cdot\\vec r_n$ determina la diferencia relativa de camino y por tanto la fase relativa. En la convención usada en esta página, la propagación aporta $e^{-ik(\\hat d\\cdot\\vec r_n)}$ y la excitación de steering se elige como $e^{+ik(\\vec r_n\\cdot\\hat s)}$.", "steering-phase-formula": "Fase de steering usada en este simulador:", "combined-element-response-formula": "Fase de propagación más fase de steering:", "steering-tip": "Si la dirección de observación coincide con la dirección de steering, $\\hat d=\\hat s$, el exponente se vuelve cero para cada elemento. Entonces todos los elementos están en fase en esa dirección, los campos se suman constructivamente y el lóbulo principal apunta allí.", "steering-convention-title": "Nota sobre la convención de signos:", "steering-convention-desc": "Los signos más/menos no son errores arbitrarios; dependen de la convención de onda elegida. Esta página usa la convención de fasores $E(t)=\\operatorname{Re}\\{\\tilde E e^{i\\omega t}\\}$ junto con una función de Green saliente proporcional a $e^{ikR}/R$. Con la convención temporal opuesta, muchos libros escriben todos los signos de propagación y steering invertidos. Ambas formas son físicamente equivalentes si se usan de forma consistente."}, "zh": {"seo-beamforming-p": "波束成形通过给每个天线阵元施加递进相移实现。数学上，这个相位来自阵元位置与指向方向之间的点积，也就是把阵元位置投影到期望传播方向上。在目标方向，几何相位差被抵消，电场相长叠加。", "beam-steering-desc": "波束指向直接来自远场距离近似。对于位置为 $\\vec r_n$ 的阵元，投影 $\\hat d\\cdot\\vec r_n$ 决定相对路程差，因此也决定相对相位。本页采用的约定中，传播项为 $e^{-ik(\\hat d\\cdot\\vec r_n)}$，指向激励选择为 $e^{+ik(\\vec r_n\\cdot\\hat s)}$。", "steering-phase-formula": "本模拟器使用的指向相位：", "combined-element-response-formula": "传播相位加指向相位：", "steering-tip": "当观察方向等于指向方向，即 $\\hat d=\\hat s$ 时，每个阵元的指数项都变为零。因此所有阵元在该方向同相，电场相长叠加，主瓣指向该方向。", "steering-convention-title": "符号约定说明：", "steering-convention-desc": "正负号不是随意的错误，而是由所选波的约定决定。本页使用工程相量约定 $E(t)=\\operatorname{Re}\\{\\tilde E e^{i\\omega t}\\}$，并使用与 $e^{ikR}/R$ 成正比的出射格林函数。若采用相反的时间约定，许多教材会把传播和指向的符号全部反过来。只要传播和指向始终使用同一套约定，两种写法在物理上等价。"}, "ja": {"seo-beamforming-p": "ビームフォーミングは各アンテナ素子に進行的な位相シフトを与えることで機能します。数学的には、この位相は素子位置とステアリング方向の内積、つまり素子位置を目的の伝搬方向へ射影した量に基づきます。目的方向では幾何学的な位相差が打ち消され、電界が強め合います。", "beam-steering-desc": "ビームステアリングは遠方界の距離近似から直接出てきます。位置 $\\vec r_n$ の素子では、射影 $\\hat d\\cdot\\vec r_n$ が相対的な経路差を決め、それが相対位相を決めます。このページの規約では、伝搬項は $e^{-ik(\\hat d\\cdot\\vec r_n)}$、ステアリング励振は $e^{+ik(\\vec r_n\\cdot\\hat s)}$ とします。", "steering-phase-formula": "このシミュレータで使うステアリング位相：", "combined-element-response-formula": "伝搬位相とステアリング位相：", "steering-tip": "観測方向とステアリング方向が等しい、つまり $\\hat d=\\hat s$ のとき、各素子の指数部はゼロになります。その方向では全素子が同相になり、電界が強め合って主ローブがそこを向きます。", "steering-convention-title": "符号規約について：", "steering-convention-desc": "プラス/マイナスの符号は任意のミスではなく、選んだ波の規約から決まります。このページでは工学でよく使うフェーザ規約 $E(t)=\\operatorname{Re}\\{\\tilde E e^{i\\omega t}\\}$ と、$e^{ikR}/R$ に比例する外向きグリーン関数を使います。逆の時間規約を使う教科書では、伝搬とステアリングの符号がすべて反転して書かれることがあります。伝搬とステアリングで同じ規約を一貫して使えば、どちらも物理的に等価です。"}};

    Object.keys(steeringConventionPatches).forEach(lang => {
      translations[lang] = Object.assign({}, translations[lang] || {}, steeringConventionPatches[lang]);
    });


    const phasorConventionPatches = {"en": {"phasor-convention-note": "The plus sign in $e^{i\\omega t}$ is the time convention used on this page. With this convention, the outgoing spatial Green function is written proportional to $e^{ikR}/R$. If the opposite time convention $e^{-i\\omega t}$ is used, the spatial phase signs are flipped, but the physical field is the same when the convention is used consistently."}, "de": {"phasor-convention-note": "Das Pluszeichen in $e^{i\\omega t}$ ist die Zeitkonvention dieser Seite. Mit dieser Konvention schreibt man die auslaufende räumliche Greensche Funktion proportional zu $e^{ikR}/R$. Wenn man die entgegengesetzte Zeitkonvention $e^{-i\\omega t}$ verwendet, drehen sich die räumlichen Phasenvorzeichen um. Das physikalische Feld bleibt gleich, solange die Konvention konsistent benutzt wird."}, "fr": {"phasor-convention-note": "Le signe plus dans $e^{i\\omega t}$ est la convention temporelle utilisée ici. Avec cette convention, la fonction de Green sortante s’écrit proportionnelle à $e^{ikR}/R$. Avec la convention opposée $e^{-i\\omega t}$, les signes de phase spatiale sont inversés, mais le champ physique reste le même si la convention est cohérente."}, "es": {"phasor-convention-note": "El signo positivo en $e^{i\\omega t}$ es la convención temporal usada en esta página. Con esta convención, la función de Green saliente se escribe proporcional a $e^{ikR}/R$. Si se usa la convención opuesta $e^{-i\\omega t}$, los signos de fase espacial se invierten, pero el campo físico es el mismo si la convención se usa de forma consistente."}, "zh": {"phasor-convention-note": "$e^{i\\omega t}$ 中的正号是本页采用的时间约定。在这个约定下，出射空间格林函数写作与 $e^{ikR}/R$ 成正比。如果采用相反的时间约定 $e^{-i\\omega t}$，空间相位符号会反过来；只要约定一致，物理场相同。"}, "ja": {"phasor-convention-note": "$e^{i\\omega t}$ のプラス符号は、このページで使う時間規約です。この規約では外向き空間グリーン関数を $e^{ikR}/R$ に比例して書きます。反対の時間規約 $e^{-i\\omega t}$ を使うと空間位相の符号は反転しますが、規約を一貫して使えば物理的な場は同じです。"}};

    Object.keys(phasorConventionPatches).forEach(lang => {
      translations[lang] = Object.assign({}, translations[lang] || {}, phasorConventionPatches[lang]);
    });

    // Theme Logic
    function applyTheme(theme) {
      const resolvedTheme = theme || 'system';
      const root = document.documentElement;
      if (resolvedTheme === 'system') {
        root.removeAttribute('data-theme');
      } else {
        root.setAttribute('data-theme', resolvedTheme);
      }
      localStorage.setItem('appearance-theme', resolvedTheme);
      const selector = document.getElementById('theme-select');
      if (selector) selector.value = resolvedTheme;
      applyCanvasBackground();
      if (typeof applySlicePlotTheme === 'function') applySlicePlotTheme();
      if (typeof onWindowResize === 'function') setTimeout(onWindowResize, 0);
    }

    function getResolvedAppearanceTheme() {
      const savedTheme = localStorage.getItem('appearance-theme') || 'system';
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function getResolvedCanvasTheme() {
      const savedCanvasTheme = localStorage.getItem('canvas-background-theme') || 'auto';
      if (savedCanvasTheme === 'light' || savedCanvasTheme === 'dark') return savedCanvasTheme;
      return getResolvedAppearanceTheme();
    }

    function getResolvedSlicePlotTheme() {
      const selected = document.getElementById('slice-plot-theme')?.value || 'auto';
      if (selected === 'light' || selected === 'dark') return selected;
      return getResolvedAppearanceTheme();
    }

    function applySlicePlotTheme() {
      const resolved = getResolvedSlicePlotTheme();
      document.getElementById('slice-dashboard')?.setAttribute('data-plot-theme', resolved);
      for (const mode of getSlicePanelModes()) if (slicePanelCache[mode]) drawSlicePanelFrame(slicePanelCache[mode], false);
    }

    function applyCanvasBackground() {
      const selected = localStorage.getItem('canvas-background-theme') || 'auto';
      const selector = document.getElementById('canvas-theme-select');
      if (selector) selector.value = selected;

      const resolvedCanvasTheme = getResolvedCanvasTheme();
      const bgColor = resolvedCanvasTheme === 'dark' ? 0x05070d : 0xf0f9ff;
      const containerBg = resolvedCanvasTheme === 'dark'
        ? 'linear-gradient(180deg, #05070d 0%, #0f172a 100%)'
        : 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)';

      if (scene) scene.background = new THREE.Color(bgColor);
      if (renderer) renderer.setClearColor(bgColor, 1);

      const container = document.getElementById('canvas-container');
      if (container) container.style.background = containerBg;
    }

    function setupCanvasThemeSelector() {
      const selector = document.getElementById('canvas-theme-select');
      if (!selector) return;
      const savedCanvasTheme = localStorage.getItem('canvas-background-theme') || 'auto';
      selector.value = savedCanvasTheme;
      applyCanvasBackground();
      selector.addEventListener('change', e => {
        localStorage.setItem('canvas-background-theme', e.target.value || 'auto');
        applyCanvasBackground();
      });
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { applyCanvasBackground(); applySlicePlotTheme(); });
      }
    }

    function setupThemeSelector() {
      const selector = document.getElementById('theme-select');
      if (!selector) return;
      const savedTheme = localStorage.getItem('appearance-theme') || 'system';
      applyTheme(savedTheme);
      selector.addEventListener('change', e => applyTheme(e.target.value));
    }

    // Translation Logic
    function applyTranslations(lang) {
      const active = translations[lang] || translations.en;
      document.documentElement.lang = lang || 'en';
      document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        const value = active[key] || translations.en[key];
        if (value) {
          element.innerHTML = value;
        } else {
          console.warn('Missing translation key:', key);
        }
      });
      document.title = active['seo-title'] || "Free 3D Phased Array Simulator – Beamforming & Antenna Array Visualizer";
      if (typeof MathJax !== 'undefined' && MathJax.startup && MathJax.startup.promise) {
        MathJax.startup.promise.then(() => MathJax.typesetPromise());
      }
    }

    // Three.js Scene Setup
    let scene, camera, renderer, controls;
    let antennaGroup, waveGroup, vectorGroup, patternMesh;
    let fieldSliceMesh, fieldSliceTexture, fieldSliceCanvas, fieldSliceCtx, fieldSliceNeedsRedraw = true;
    let fieldSliceTime = 0;
    let slicePanelCache = {};
    let slicePanelNeedsRebuild = true;
    let slicePlaneMarkerGroup, sliceTooltip, sliceRaycaster, sliceMouse = new THREE.Vector2(999, 999);
    let cutawayPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
    let cutawayCapMesh, cutawayOutlineGroup;
    let observationPoint, steeringPoint;
    const WAVELENGTH = 1; 
    const WAVENUMBER = 2 * Math.PI / WAVELENGTH;
    const AXIS_LENGTH = 100;
    let ANTENNA_POSITIONS = [];
    const ACTIVE_COLOR = new THREE.Color(0x3b82f6);
    const INACTIVE_COLOR = new THREE.Color(0x6b7280);

    function isCoarsePointerDevice() {
      return !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    }
    function isPhoneLayout() {
      return window.innerWidth <= 640 || (isCoarsePointerDevice() && Math.min(window.innerWidth, window.innerHeight) <= 520);
    }
    function isTabletLayout() {
      return !isPhoneLayout() && (window.innerWidth <= 1024 || isCoarsePointerDevice());
    }
    let isProgressiveInteracting = false;
    let progressiveIdleTimer = 0;

    function getRenderQuality() {
      // While dragging sliders, draw a deliberately cheaper preview.
      // After the user pauses/releases, one full-quality update is rendered automatically.
      if (isProgressiveInteracting) {
        if (isPhoneLayout()) return { phi: 18, theta: 9, dpr: 0.85, polarStep: 10, topStep: 24, frameSkip: 3 };
        if (isTabletLayout()) return { phi: 26, theta: 13, dpr: 1.0, polarStep: 6, topStep: 18, frameSkip: 2 };
        return { phi: 36, theta: 18, dpr: Math.min(window.devicePixelRatio || 1, 1.25), polarStep: 3, topStep: 10, frameSkip: 1 };
      }
      if (isPhoneLayout()) return { phi: 34, theta: 17, dpr: 1.2, polarStep: 4, topStep: 12, frameSkip: 2 };
      if (isTabletLayout()) return { phi: 54, theta: 27, dpr: 1.45, polarStep: 2, topStep: 7.5, frameSkip: 1 };
      return { phi: 72, theta: 36, dpr: Math.min(window.devicePixelRatio || 1, 2), polarStep: 1, topStep: 5, frameSkip: 1 };
    }
    let scheduledVisualUpdate = 0;
    let lastVisualUpdateMs = 0;

    function scheduleProgressiveVisuals() {
      isProgressiveInteracting = true;
      document.getElementById('visual-workspace')?.classList.add('progressive-low');
      clearTimeout(progressiveIdleTimer);
      scheduleAllVisuals();
      progressiveIdleTimer = setTimeout(() => {
        isProgressiveInteracting = false;
        document.getElementById('visual-workspace')?.classList.remove('progressive-low');
        updateAllVisuals();
      }, isPhoneLayout() ? 220 : (isTabletLayout() ? 170 : 130));
    }

    function scheduleAllVisuals() {
      const now = performance.now();
      const minDelay = isProgressiveInteracting ? (isPhoneLayout() ? 95 : (isTabletLayout() ? 45 : 18)) : (isPhoneLayout() ? 105 : (isTabletLayout() ? 35 : 0));
      if (scheduledVisualUpdate) cancelAnimationFrame(scheduledVisualUpdate);
      scheduledVisualUpdate = requestAnimationFrame(() => {
        const elapsed = performance.now() - lastVisualUpdateMs;
        if (elapsed < minDelay) {
          setTimeout(() => { scheduledVisualUpdate = 0; updateAllVisuals(); }, minDelay - elapsed);
        } else {
          scheduledVisualUpdate = 0;
          updateAllVisuals();
        }
      });
    }

    function parseCustomArrayCoordinates() {
      const text = document.getElementById('custom-array-coordinates')?.value || '';
      const rows = [];
      text.split(/\n+/).forEach((line) => {
        const clean = line.replace(/#.*/, '').trim();
        if (!clean) return;
        const nums = clean.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g)?.map(Number) || [];
        if (nums.length >= 3) {
          const [ux, uy, uz] = nums;
          rows.push({
            user: { x: ux, y: uy, z: uz },
            position: new THREE.Vector3(ux, uz, uy),
            amp: Number.isFinite(nums[3]) ? nums[3] : 1,
            phaseDeg: Number.isFinite(nums[4]) ? nums[4] : 0,
            enabledByDefault: nums.length >= 6 ? nums[5] !== 0 : true
          });
        }
      });
      return rows;
    }

    function updateCustomArrayStatus(message, isError=false) {
      const el = document.getElementById('custom-array-status');
      if (!el) return;
      el.textContent = message;
      el.style.color = isError ? '#dc2626' : '';
    }

    function getArrayConfig() {
      const customEnabled = !!document.getElementById('custom-array-enabled')?.checked;
      return {
        nx: parseInt(document.getElementById('array-x-count')?.value || '5', 10),
        nz: parseInt(document.getElementById('array-z-count')?.value || '5', 10),
        spacing: parseFloat(document.getElementById('element-spacing')?.value || '0.5') * WAVELENGTH,
        taper: document.getElementById('amplitude-taper')?.value || 'uniform',
        sllDb: parseFloat(document.getElementById('chebyshev-sidelobe')?.value || '25'),
        customEnabled
      };
    }

    function updateAntennaPositions() {
      const cfg = getArrayConfig();
      ANTENNA_POSITIONS = [];
      if (cfg.customEnabled) {
        const rows = parseCustomArrayCoordinates();
        if (rows.length) {
          rows.forEach((row, index) => {
            ANTENNA_POSITIONS.push({
              index,
              ix: index,
              iz: 0,
              position: row.position,
              userCoords: row.user,
              amp: row.amp,
              phaseDeg: row.phaseDeg,
              enabledByDefault: row.enabledByDefault,
              custom: true
            });
          });
          updateCustomArrayStatus(`Custom array active: ${rows.length} elements`);
          return;
        }
        updateCustomArrayStatus('No valid custom coordinates found. Using regular grid.', true);
      } else {
        updateCustomArrayStatus('Regular grid active');
      }
      let index = 0;
      for (let iz = 0; iz < cfg.nz; iz++) {
        for (let ix = 0; ix < cfg.nx; ix++) {
          const ux = (ix - (cfg.nx - 1) / 2) * cfg.spacing;
          const uy = (iz - (cfg.nz - 1) / 2) * cfg.spacing;
          const uz = 0;
          ANTENNA_POSITIONS.push({
            index,
            ix,
            iz,
            position: new THREE.Vector3(ux, uz, uy),
            userCoords: { x: ux, y: uy, z: uz },
            amp: 1,
            phaseDeg: 0,
            enabledByDefault: true,
            custom: false
          });
          index++;
        }
      }
    }

    function renderAntennaCheckboxes() {
      updateAntennaPositions();
      const grid = document.getElementById('antenna-grid');
      if (!grid) return;
      grid.innerHTML = '';
      ANTENNA_POSITIONS.forEach(({ index, position, userCoords, enabledByDefault }) => {
        const wrap = document.createElement('div');
        wrap.className = 'checkbox-wrapper';
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = enabledByDefault !== false;
        input.id = `antenna-${index}`;
        const label = document.createElement('label');
        label.htmlFor = input.id;
        const uc = userCoords || { x: position.x, y: position.z, z: position.y };
        label.textContent = `(${uc.x.toFixed(2)}, ${uc.y.toFixed(2)}, ${uc.z.toFixed(2)})`;
        wrap.appendChild(input);
        wrap.appendChild(label);
        grid.appendChild(wrap);
      });
    }

    function acoshSafe(x) { return Math.log(x + Math.sqrt(Math.max(0, x * x - 1))); }

    function chebyshevWeights(N, attenuationDb) {
      if (N <= 1) return [1];
      const order = N - 1;
      const beta = Math.cosh(acoshSafe(Math.pow(10, Math.abs(attenuationDb) / 20)) / order);
      const p = [];
      for (let k = 0; k < N; k++) {
        const x = beta * Math.cos(Math.PI * k / N);
        if (x > 1) p.push(Math.cosh(order * acoshSafe(x)));
        else if (x < -1) p.push(((order % 2) ? -1 : 1) * Math.cosh(order * acoshSafe(-x)));
        else p.push(Math.cos(order * Math.acos(x)));
      }
      const raw = new Array(N).fill(0);
      for (let n = 0; n < N; n++) {
        let sum = 0;
        for (let k = 0; k < N; k++) sum += p[k] * Math.cos(2 * Math.PI * n * k / N);
        raw[n] = sum;
      }
      const mid = Math.floor(N / 2);
      const shifted = new Array(N);
      for (let i = 0; i < N; i++) shifted[i] = Math.abs(raw[(i + mid) % N]);
      const max = Math.max(...shifted) || 1;
      return shifted.map(v => v / max);
    }

    function getArrayWeight(antenna) {
      const cfg = getArrayConfig();
      const amp = Number.isFinite(antenna.amp) ? antenna.amp : 1;
      if (antenna.custom || cfg.customEnabled) return amp;
      if (cfg.taper !== 'chebyshev') return amp;
      const wx = chebyshevWeights(cfg.nx, cfg.sllDb);
      const wz = chebyshevWeights(cfg.nz, cfg.sllDb);
      return amp * (wx[antenna.ix] || 1) * (wz[antenna.iz] || 1);
    }

    // Initialization function
    function init() {
      // Scene and Camera
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf0f9ff);
      const container = document.getElementById('canvas-container');
      if (!container) { console.error("Canvas container not found!"); return; }
      camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 200);
      camera.position.set(20, 15, 20);
      camera.lookAt(0, 0, 0);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: !isPhoneLayout(), powerPreference: isPhoneLayout() ? "low-power" : "high-performance" });
      renderer.localClippingEnabled = true;
      renderer.setPixelRatio(getRenderQuality().dpr);
      renderer.setSize(container.clientWidth, container.clientHeight, false);
      container.appendChild(renderer.domElement);
      applyCanvasBackground();

      // Controls and Lights
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      scene.add(new THREE.AmbientLight(0xffffff, 0.7));
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
      dirLight.position.set(5, 10, 7.5);
      scene.add(dirLight);

      // Scene Objects
      createCoordinateSystem();
      antennaGroup = new THREE.Group(); scene.add(antennaGroup);
      waveGroup = new THREE.Group(); scene.add(waveGroup);
      vectorGroup = new THREE.Group(); scene.add(vectorGroup);
      renderAntennaCheckboxes();
      createAntennas();
      observationPoint = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), new THREE.MeshPhongMaterial({ color: 0xef4444 })); scene.add(observationPoint);
      steeringPoint = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), new THREE.MeshPhongMaterial({ color: 0x7f7f7f })); scene.add(steeringPoint);
      createFarFieldPattern();
      createFieldSlicePlane();
      createSlicePlaneMarkers();
      createCutawayHelpers();

      // Initial state updates
      if (isPhoneLayout()) {
        document.getElementById('show-waves') && (document.getElementById('show-waves').checked = false);
        document.getElementById('show-vectors') && (document.getElementById('show-vectors').checked = false);
        document.getElementById('slice-panel-waves') && (document.getElementById('slice-panel-waves').checked = false);
      }
      updateAllVisuals();
      
      // Event Listeners
      window.addEventListener('resize', onWindowResize);
      animate();
    }
    
    // Helper function to create coordinate axes
    function createCoordinateSystem() {
      const createAxis = (color, rotation, position) => {
        const mat = new THREE.MeshBasicMaterial({ color });
        const geo = new THREE.CylinderGeometry(0.03, 0.03, AXIS_LENGTH);
        const axis = new THREE.Mesh(geo, mat);
        Object.assign(axis.rotation, rotation);
        Object.assign(axis.position, position);
        scene.add(axis);
      };
      createAxis(0xef4444, { z: -Math.PI / 2 }, { x: 0, y: 0, z: 0 }); // X-Axis
      createAxis(0x22c55e, {}, { x: 0, y: 0, z: 0 }); // Y-Axis
      createAxis(0x3b82f6, { x: Math.PI / 2 }, { x: 0, y: 0, z: 0 }); // Z-Axis
    }

    // Create or recreate antenna meshes
    function createAntennas() {
      const antennaType = document.getElementById('pattern-type').value;
      antennaGroup.clear();
      ANTENNA_POSITIONS.forEach(({ position: posVec, index, ix, iz, userCoords, amp, phaseDeg, custom }) => {
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.05, 16), new THREE.MeshPhongMaterial({ color: 0x6b7280 }));
        base.position.copy(posVec);
        let element;
        if (antennaType === 'isotropic') {
          element = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), new THREE.MeshPhongMaterial({ color: ACTIVE_COLOR, transparent: true, opacity: 0.75 }));
          element.position.y = 0.15;
        } else {
          // Visual-only patch size: keep the simulation patch aperture below unchanged,
          // but draw each antenna smaller so neighbouring elements do not look merged
          // at the common 0.5λ spacing.
          const cfg = getArrayConfig();
          const visualPatchWidth = Math.min(WAVELENGTH * 0.34, cfg.spacing * 0.68);
          const visualPatchDepth = visualPatchWidth * 0.78;
          element = new THREE.Mesh(
            new THREE.BoxGeometry(visualPatchWidth, 0.035, visualPatchDepth),
            new THREE.MeshPhongMaterial({ color: ACTIVE_COLOR, shininess: 65 })
          );
          element.position.y = 0.11;

          // Thin outline makes every element readable in the 3D view.
          const edges = new THREE.LineSegments(
            new THREE.EdgesGeometry(element.geometry),
            new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
          );
          edges.position.copy(element.position);
          base.add(edges);
        }
        base.add(element);
        const checkbox = document.getElementById(`antenna-${index}`);
        const active = checkbox ? checkbox.checked : true;
        element.material.color.set(active ? ACTIVE_COLOR : INACTIVE_COLOR);
        base.userData = { index, ix, iz, position: posVec, userCoords, amp, phaseDeg, custom, active, elementMesh: element };
        antennaGroup.add(base);
      });
    }
    
    // Create the mesh for the far-field pattern
    function createFarFieldPattern() {
      const thetaLength = hasGroundPlane() ? Math.PI / 2 : Math.PI;
      const geometry = new THREE.SphereGeometry(1, 64, 32, 0, Math.PI * 2, 0, thetaLength);
      const material = new THREE.MeshPhongMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: 0.75, clippingPlanes: [], clipShadows: true });
      patternMesh = new THREE.Mesh(geometry, material);
      scene.add(patternMesh);
    }
    
    // --- Small complex-number utilities for the simplified coupling model ---
    function cAdd(a, b) { return { re: a.re + b.re, im: a.im + b.im }; }
    function cSub(a, b) { return { re: a.re - b.re, im: a.im - b.im }; }
    function cMul(a, b) { return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re }; }
    function cDiv(a, b) {
      const d = b.re * b.re + b.im * b.im || 1e-12;
      return { re: (a.re * b.re + a.im * b.im) / d, im: (a.im * b.re - a.re * b.im) / d };
    }
    function cExp(phase) { return { re: Math.cos(phase), im: Math.sin(phase) }; }
    function cScale(a, scale) { return { re: a.re * scale, im: a.im * scale }; }

    function solveComplexLinearSystem(A, b) {
      const n = b.length;
      const M = A.map((row, i) => row.map(v => ({ ...v })).concat([{ ...b[i] }]));
      for (let col = 0; col < n; col++) {
        let pivot = col;
        let best = 0;
        for (let r = col; r < n; r++) {
          const mag = M[r][col].re * M[r][col].re + M[r][col].im * M[r][col].im;
          if (mag > best) { best = mag; pivot = r; }
        }
        if (best < 1e-14) continue;
        if (pivot !== col) [M[pivot], M[col]] = [M[col], M[pivot]];
        const pv = { ...M[col][col] };
        for (let c = col; c <= n; c++) M[col][c] = cDiv(M[col][c], pv);
        for (let r = 0; r < n; r++) {
          if (r === col) continue;
          const f = { ...M[r][col] };
          for (let c = col; c <= n; c++) M[r][c] = cSub(M[r][c], cMul(f, M[col][c]));
        }
      }
      return M.map(row => row[n]);
    }

    let elementCurrentCache = { key: null, currents: null };

    function getElementCurrents(activeAntennas, steeringDir, couplingEnabled, couplingStrength) {
      const cfgKey = getArrayConfig();
      const key = activeAntennas.map(a => `${a.index}:${a.position.x.toFixed(3)},${a.position.y.toFixed(3)},${a.position.z.toFixed(3)},${(a.amp||1).toFixed(3)},${(a.phaseDeg||0).toFixed(1)}`).join(';') + '|' +
        steeringDir.x.toFixed(5) + ',' + steeringDir.y.toFixed(5) + ',' + steeringDir.z.toFixed(5) +
        '|' + couplingEnabled + '|' + couplingStrength.toFixed(4) + '|' + cfgKey.taper + '|' + cfgKey.sllDb.toFixed(1);
      if (elementCurrentCache.key === key) return elementCurrentCache.currents;

      const n = activeAntennas.length;
      const excitation = activeAntennas.map(a => cScale(cExp(WAVENUMBER * a.position.dot(steeringDir) + ((a.phaseDeg || 0) * Math.PI / 180)), getArrayWeight(a)));
      if (!couplingEnabled || couplingStrength <= 0 || n <= 1) {
        const map = new Map(activeAntennas.map((a, i) => [a.index, excitation[i]]));
        elementCurrentCache = { key, currents: map };
        return map;
      }

      // Simplified MoM-inspired element-current model:
      // (I - alpha G) I_eff = I_feed. G contains pairwise Green-function coupling.
      // This is intentionally low-order and fast; it is not a full-wave MoM solver.
      const A = Array.from({ length: n }, () => Array.from({ length: n }, () => ({ re: 0, im: 0 })));
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i === j) {
            A[i][j] = { re: 1, im: 0 };
          } else {
            const R = activeAntennas[i].position.distanceTo(activeAntennas[j].position);
            const g = cScale(cExp(WAVENUMBER * R), couplingStrength / Math.max(R, 0.2));
            A[i][j] = { re: -g.re, im: -g.im };
          }
        }
      }
      const solved = solveComplexLinearSystem(A, excitation);
      const map = new Map(activeAntennas.map((a, i) => [a.index, solved[i]]));
      elementCurrentCache = { key, currents: map };
      return map;
    }

    // Radiation environment: ground plane = upper half-space model; free space = bidirectional element model.
    function getRadiationModel() {
      return document.getElementById('radiation-model')?.value || 'ground';
    }

    function hasGroundPlane() {
      return getRadiationModel() !== 'free';
    }

    // Core calculation of the field at a specific point
    function patchElementGain(direction) {
      const c = direction.clone().normalize().dot(new THREE.Vector3(0, 1, 0));
      // Ground plane mode: suppress lower half-space. Free-space mode: allow both sides.
      // This is still a visualization model, not a full-wave FEM patch solution.
      return hasGroundPlane() ? Math.pow(Math.max(0, c), 2) : Math.pow(Math.abs(c), 2);
    }

    function patchCurrentDistribution(px, pz, N) {
      // Prescribed equivalent surface-current weight for one patch element.
      // u and v are normalized subpatch-center coordinates in [0,1].
      // This simple standing-wave-like model gives low current near edges
      // and maximum current near the center. It is illustrative; a real J(r)
      // would come from measurement, FEM, FDTD or MoM.
      const u = (px + 0.5) / N;
      const v = (pz + 0.5) / N;
      const Jx = Math.sin(Math.PI * u);
      const Jz = Math.sin(Math.PI * v);
      return Jx * Jz;
    }

    function calculateFieldAtPoint(R_vec, activeAntennas, patternType, useFraunhofer, steeringDir, subpatchDensity, couplingEnabled=false, couplingStrength=0) {
      if (activeAntennas.length === 0) return { real: 0, imag: 0 };
      const R = R_vec.length();
      if (R < 1e-6) return { real: 0, imag: 0 };
      const r_hat = R_vec.clone().normalize();
      const elementCurrents = getElementCurrents(activeAntennas, steeringDir, couplingEnabled, couplingStrength);
      let sumReal = 0, sumImag = 0;

      activeAntennas.forEach(antenna => {
        const antennaPos = antenna.position;
        const antennaCurrent = elementCurrents.get(antenna.index) || { re: 1, im: 0 };

        if (useFraunhofer) {
          // Fraunhofer model: common spherical factor e^{ikR}/R, element pattern, and array phase.
          const gain = (patternType === 'patch') ? patchElementGain(r_hat) : 1.0;
          const phase = WAVENUMBER * (R - r_hat.dot(antennaPos));
          const amp = gain / R;
          const wave = cScale(cExp(phase), amp);
          const contribution = cMul(antennaCurrent, wave);
          sumReal += contribution.re;
          sumImag += contribution.im;
        } else {
          // Discrete prescribed-current Huygens-style approximation: split each patch into subpatch sources.
          // The 1/Np weight keeps the element amplitude stable when density changes.
          const patchWidthX = WAVELENGTH / 2;
          const patchWidthZ = patchWidthX * 0.8;
          const subpatchSizeX = patchWidthX / subpatchDensity;
          const subpatchSizeZ = patchWidthZ / subpatchDensity;
          const sourceWeight = 1 / (subpatchDensity * subpatchDensity);

          for (let px = 0; px < subpatchDensity; px++) {
            for (let pz = 0; pz < subpatchDensity; pz++) {
              const subpatchPos = new THREE.Vector3(
                antennaPos.x - patchWidthX / 2 + (px + 0.5) * subpatchSizeX,
                antennaPos.y,
                antennaPos.z - patchWidthZ / 2 + (pz + 0.5) * subpatchSizeZ
              );
              const r_vec_sub = R_vec.clone().sub(subpatchPos);
              const dist = r_vec_sub.length();
              if (dist < 1e-6) continue;
              const localDir = r_vec_sub.clone().normalize();
              const gain = (patternType === 'patch') ? patchElementGain(localDir) : 1.0;
              const currentWeight = (patternType === 'patch') ? patchCurrentDistribution(px, pz, subpatchDensity) : 1.0;
              const phase = WAVENUMBER * dist;
              const amp = sourceWeight * currentWeight * gain / dist;
              const wave = cScale(cExp(phase), amp);
              const contribution = cMul(antennaCurrent, wave);
              sumReal += contribution.re;
              sumImag += contribution.im;
            }
          }
        }
      });
      return { real: sumReal, imag: sumImag };
    }

    function fieldAmplitude(field) {
      return Math.sqrt(field.real * field.real + field.imag * field.imag);
    }

    const DB_FLOOR = -40;

    function fieldLinearValue(field, quantity) {
      const amp = fieldAmplitude(field);
      return quantity === 'power' ? amp * amp : amp;
    }

    function fieldDbValue(field, quantity, referenceValue) {
      const value = fieldLinearValue(field, quantity);
      const safeReference = Math.max(referenceValue || 0, 1e-30);
      if (quantity === 'power') {
        return Math.max(DB_FLOOR, 10 * Math.log10(Math.max(value / safeReference, 1e-12)));
      }
      return Math.max(DB_FLOOR, 20 * Math.log10(Math.max(value / safeReference, 1e-6)));
    }

    function fieldDisplayValue(field, quantity, scale='linear', referenceValue=1) {
      return scale === 'db' ? fieldDbValue(field, quantity, referenceValue) : fieldLinearValue(field, quantity);
    }

    function displayValueToNormalized(displayValue, scale) {
      if (scale === 'db') return Math.max(0, Math.min(1, (displayValue - DB_FLOOR) / Math.abs(DB_FLOOR)));
      return Math.max(0, Math.min(1, displayValue));
    }

    function calculateReferenceValue(activeAntennas, patternType, useApprox, steeringDir, subpatchDensity, obsDist, fieldQuantity, couplingEnabled, couplingStrength) {
      let maxValue = 0;
      for (let i = 0; i <= 20; i++) {
        for (let j = 0; j < 40; j++) {
          const theta = (i / 20) * (hasGroundPlane() ? Math.PI / 2 : Math.PI);
          const phi = (j / 40) * (2 * Math.PI);
          const dir = new THREE.Vector3(Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi));
          const field = calculateFieldAtPoint(dir.multiplyScalar(obsDist), activeAntennas, patternType, useApprox, steeringDir, subpatchDensity, couplingEnabled, couplingStrength);
          maxValue = Math.max(maxValue, fieldLinearValue(field, fieldQuantity));
        }
      }
      return maxValue || 1;
    }

    // Update the visualization of the far-field pattern
    function updateFarFieldPattern() {
      const sliceOnly = (document.getElementById('field-slice-mode')?.value || 'off') !== 'off'
        && (document.getElementById('field-slice-view')?.value || 'overlay') === 'only';
      patternMesh.visible = document.getElementById('show-pattern').checked && !sliceOnly;
      const activeAntennas = antennaGroup.children.filter(a => a.userData.active).map(a => a.userData);
      if (!patternMesh.visible || activeAntennas.length === 0) return;

      const { patternType, displayType, fieldQuantity, displayScale, useApprox, subpatchDensity, obsDist, normalize, couplingEnabled, couplingStrength } = getControlValues();
      const steeringDir = getSteeringDirection();

      const referenceValue = (normalize || displayScale === 'db')
        ? calculateReferenceValue(activeAntennas, patternType, useApprox, steeringDir, subpatchDensity, obsDist, fieldQuantity, couplingEnabled, couplingStrength)
        : 1;
      
      const thetaLength = hasGroundPlane() ? Math.PI / 2 : Math.PI;
      const quality = getRenderQuality();
      const newGeometry = displayType === '3d'
        ? new THREE.SphereGeometry(1, quality.phi, quality.theta, 0, Math.PI * 2, 0, thetaLength)
        : new THREE.SphereGeometry(obsDist, quality.phi, quality.theta, 0, Math.PI * 2, 0, thetaLength);
      const positions = newGeometry.attributes.position;
      const colors = new Float32Array(positions.count * 3);

      for (let i = 0; i < positions.count; i++) {
        const vertex = new THREE.Vector3().fromBufferAttribute(positions, i);
        if (hasGroundPlane() && vertex.y < -0.001 && displayType === '3d') continue;

        const dir = vertex.clone().normalize();
        const field = calculateFieldAtPoint(dir.clone().multiplyScalar(obsDist), activeAntennas, patternType, useApprox, steeringDir, subpatchDensity, couplingEnabled, couplingStrength);
        const displayValue = fieldDisplayValue(field, fieldQuantity, displayScale, referenceValue);
        const normMag = displayScale === 'db'
          ? displayValueToNormalized(displayValue, displayScale)
          : (normalize ? displayValue / referenceValue : displayValue);
        
        if (displayType === '3d') {
          vertex.multiplyScalar(Math.max(0, normMag) * obsDist);
          positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }

        const color = new THREE.Color().setHSL((1 - Math.min(1, Math.max(0, normMag))) * 0.7, 1, 0.5);
        color.toArray(colors, i * 3);
      }

      newGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      if (displayType === '3d') {
          positions.needsUpdate = true;
          newGeometry.computeVertexNormals();
      }
      patternMesh.geometry.dispose();
      patternMesh.geometry = newGeometry;
      updateCutaway();
    }

    // Utility to get values from control UI elements
    function getControlValues() {
        return {
            patternType: document.getElementById('pattern-type').value,
            displayType: document.getElementById('pattern-display').value,
            fieldQuantity: document.getElementById('field-quantity')?.value || 'power',
            displayScale: document.getElementById('display-scale')?.value || 'linear',
            useApprox: document.getElementById('calculation-method').value === 'true',
            subpatchDensity: parseInt(document.getElementById('subpatch-density').value),
            obsDist: parseFloat(document.getElementById('observation-distance').value),
            normalize: document.getElementById('normalize-pattern-toggle').checked,
            couplingEnabled: document.getElementById('mutual-coupling-toggle').checked,
            couplingDb: parseFloat(document.getElementById('coupling-strength').value),
            couplingStrength: Math.pow(10, parseFloat(document.getElementById('coupling-strength').value) / 20),
        };
    }

    // Get steering direction vector from sliders
    function getSteeringDirection() {
        const azimuth = parseFloat(document.getElementById('steering-azimuth').value) * Math.PI / 180;
        const elevation = parseFloat(document.getElementById('steering-elevation').value) * Math.PI / 180;
        return new THREE.Vector3(Math.cos(azimuth) * Math.cos(elevation), Math.sin(elevation), Math.sin(azimuth) * Math.cos(elevation)).normalize();
    }
    
    // Get observation point vector from sliders
    function getObservationDirection() {
        const azimuth = parseFloat(document.getElementById('observation-azimuth').value) * Math.PI / 180;
        const elevation = parseFloat(document.getElementById('observation-elevation').value) * Math.PI / 180;
        const distance = parseFloat(document.getElementById('observation-distance').value);
        return new THREE.Vector3(Math.cos(azimuth) * Math.cos(elevation), Math.sin(elevation), Math.sin(azimuth) * Math.cos(elevation)).normalize().multiplyScalar(distance);
    }
    

    // Lightweight 2D slice system: one plane + one CanvasTexture.
    // It shows a real cross-section through the scalar field, not a projection.
    function createFieldSlicePlane() {
      fieldSliceCanvas = document.createElement('canvas');
      fieldSliceCanvas.width = 320;
      fieldSliceCanvas.height = 320;
      fieldSliceCtx = fieldSliceCanvas.getContext('2d', { willReadFrequently: true });
      fieldSliceTexture = new THREE.CanvasTexture(fieldSliceCanvas);
      fieldSliceTexture.minFilter = THREE.LinearFilter;
      fieldSliceTexture.magFilter = THREE.LinearFilter;
      fieldSliceTexture.generateMipmaps = false;

      const geo = new THREE.PlaneGeometry(1, 1, 1, 1);
      const mat = new THREE.MeshBasicMaterial({
        map: fieldSliceTexture,
        transparent: true,
        opacity: 0.96,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      fieldSliceMesh = new THREE.Mesh(geo, mat);
      fieldSliceMesh.renderOrder = 15;
      fieldSliceMesh.visible = false;
      scene.add(fieldSliceMesh);
    }

    function getFieldSliceControls() {
      return {
        mode: document.getElementById('field-slice-mode')?.value || 'off',
        style: document.getElementById('field-slice-style')?.value || 'contour',
        view: document.getElementById('field-slice-view')?.value || 'overlay',
        sizeOverride: parseFloat(document.getElementById('slice-size')?.value || '30')
      };
    }

    function sliceColorMap(t) {
      // Perceptual-ish blue -> cyan -> yellow -> red palette for readable field slices.
      t = Math.max(0, Math.min(1, t));
      const stops = [
        [0.00, [7, 12, 45]],
        [0.10, [20, 35, 110]],
        [0.24, [30, 110, 210]],
        [0.40, [25, 190, 210]],
        [0.56, [55, 210, 120]],
        [0.72, [245, 220, 70]],
        [0.86, [245, 135, 45]],
        [1.00, [210, 35, 40]]
      ];
      for (let i = 0; i < stops.length - 1; i++) {
        const [a, ca] = stops[i], [b, cb] = stops[i + 1];
        if (t >= a && t <= b) {
          const u0 = (t - a) / (b - a);
          const u = u0 * u0 * (3 - 2 * u0);
          return [
            Math.round(ca[0] + (cb[0] - ca[0]) * u),
            Math.round(ca[1] + (cb[1] - ca[1]) * u),
            Math.round(ca[2] + (cb[2] - ca[2]) * u)
          ];
        }
      }
      return stops[stops.length - 1][1];
    }

    function getActiveAntennaUserData() {
      return antennaGroup.children.filter(a => a.userData.active).map(a => a.userData);
    }

    function getSliceBasis(mode, steeringDir) {
      const ex = new THREE.Vector3(1, 0, 0);
      const ey = new THREE.Vector3(0, 1, 0);
      const ez = new THREE.Vector3(0, 0, 1);

      // UI uses antenna terms, not programming-axis names. In this simulator y is the vertical/up direction.
      if (mode === 'azimuth' || mode === 'top') return { u: ex, v: ez, normal: ey };

      if (mode === 'elevation') {
        const az = parseFloat(document.getElementById('steering-azimuth')?.value || '0') * Math.PI / 180;
        const forward = new THREE.Vector3(Math.cos(az), 0, Math.sin(az)).normalize();
        const up = ey.clone();
        const normal = new THREE.Vector3().crossVectors(forward, up).normalize();
        return { u: forward, v: up, normal };
      }

      // Beam-plane: vertical principal plane through the current beam direction.
      // This keeps the diagonal helper plane physically meaningful while steering changes.
      const beam = steeringDir.clone().normalize();
      const horiz = new THREE.Vector3(beam.x, 0, beam.z);
      if (horiz.lengthSq() < 1e-8) {
        const u = ex.clone();
        const v = ey.clone();
        const normal = new THREE.Vector3().crossVectors(u, v).normalize();
        return { u, v, normal };
      }
      const u = horiz.normalize();
      const v = ey.clone();
      const normal = new THREE.Vector3().crossVectors(u, v).normalize();
      return { u, v, normal };
    }

    function getAzimuthCutElevationRad() {
      const selector = document.getElementById('azimuth-cut-elevation');
      const choice = selector?.value || 'steering';
      if (choice === 'steering') {
        return parseFloat(document.getElementById('steering-elevation')?.value || '0') * Math.PI / 180;
      }
      return parseFloat(choice || '0') * Math.PI / 180;
    }

    function getAngularDirectionForPattern(mode, angleRad, steeringDir) {
      const ey = new THREE.Vector3(0, 1, 0);
      if (mode === 'azimuth') {
        const el = getAzimuthCutElevationRad();
        const c = Math.cos(el);
        return new THREE.Vector3(Math.cos(angleRad) * c, Math.sin(el), Math.sin(angleRad) * c).normalize();
      }
      if (mode === 'elevation') {
        const az = parseFloat(document.getElementById('steering-azimuth')?.value || '0') * Math.PI / 180;
        const forward = new THREE.Vector3(Math.cos(az), 0, Math.sin(az)).normalize();
        return forward.multiplyScalar(Math.cos(angleRad)).add(ey.clone().multiplyScalar(Math.sin(angleRad))).normalize();
      }
      const { u, v } = getSliceBasis('beam', steeringDir);
      return u.clone().multiplyScalar(Math.cos(angleRad)).add(v.clone().multiplyScalar(Math.sin(angleRad))).normalize();
    }

    function orientSliceMesh(mode, steeringDir, size) {
      const { u, v, normal } = getSliceBasis(mode, steeringDir);
      const matrix = new THREE.Matrix4().makeBasis(u, v, normal);
      fieldSliceMesh.quaternion.setFromRotationMatrix(matrix);
      fieldSliceMesh.position.set(0, 0, 0);
      fieldSliceMesh.scale.set(size, size, 1);
    }

    function drawSliceLegend(ctx, W, H, displayScale, fieldQuantity) {
      ctx.save();
      ctx.globalAlpha = 0.92;
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.fillRect(8, 8, 172, 23);
      ctx.fillStyle = '#fff';
      ctx.font = '12px system-ui, -apple-system, Segoe UI, sans-serif';
      const q = fieldQuantity === 'power' ? '|E|²' : '|E|';
      ctx.fillText(`${q} ${displayScale === 'db' ? 'dB slice' : 'linear slice'}`, 16, 24);
      ctx.restore();
    }

    function updateFieldSlice() {
      if (!fieldSliceMesh || !fieldSliceCanvas || !fieldSliceCtx) return;

      const { mode, style, view, sizeOverride } = getFieldSliceControls();

      // In slice-only mode, hide the 3D lobe and cutaway helpers.
      const sliceOnly = mode !== 'off' && view === 'only';
      if (patternMesh) patternMesh.visible = document.getElementById('show-pattern')?.checked && !sliceOnly;
      if (cutawayCapMesh && sliceOnly) cutawayCapMesh.visible = false;
      if (cutawayOutlineGroup && sliceOnly) cutawayOutlineGroup.clear();

      if (mode === 'off') {
        fieldSliceMesh.visible = false;
        return;
      }

      const activeAntennas = getActiveAntennaUserData();
      if (activeAntennas.length === 0) {
        fieldSliceMesh.visible = false;
        return;
      }

      const controlsValues = getControlValues();
      const { patternType, fieldQuantity, displayScale, useApprox, subpatchDensity, obsDist, couplingEnabled, couplingStrength } = controlsValues;
      const steeringDir = getSteeringDirection();

      const cfg = getArrayConfig();
      const aperture = Math.max(cfg.nx, cfg.nz) * cfg.spacing;
      const autoSize = Math.max(10, Math.min(70, Math.max(obsDist * 1.35, aperture * 7)));
      const size = Math.max(8, Math.min(80, sizeOverride || autoSize));
      orientSliceMesh(mode, steeringDir, size);

      // In slice-only mode make it face the camera better after orientation by keeping it huge and bright.
      fieldSliceMesh.material.opacity = sliceOnly ? 1.0 : 0.88;
      fieldSliceMesh.material.depthTest = !sliceOnly;

      if (style !== 'waves' && !fieldSliceNeedsRedraw) {
        fieldSliceMesh.visible = true;
        return;
      }

      const W = fieldSliceCanvas.width;
      const H = fieldSliceCanvas.height;
      const ctx = fieldSliceCtx;
      const img = ctx.createImageData(W, H);
      const data = img.data;
      const { u, v } = getSliceBasis(mode, steeringDir);

      const linValues = new Float32Array(W * H);
      const normValues = new Float32Array(W * H);
      let maxLinear = 1e-18;

      for (let py = 0; py < H; py++) {
        const b = (0.5 - py / (H - 1)) * size;
        for (let px = 0; px < W; px++) {
          const a = (px / (W - 1) - 0.5) * size;
          const Rvec = u.clone().multiplyScalar(a).add(v.clone().multiplyScalar(b));

          // Slight lift avoids singular points at the source plane without changing the visible slice idea.
          if (Rvec.length() < 0.35) Rvec.add(steeringDir.clone().multiplyScalar(0.35));

          const field = calculateFieldAtPoint(Rvec, activeAntennas, patternType, useApprox, steeringDir, subpatchDensity, couplingEnabled, couplingStrength);
          const lin = fieldLinearValue(field, fieldQuantity);
          linValues[py * W + px] = lin;
          if (Number.isFinite(lin)) maxLinear = Math.max(maxLinear, lin);
        }
      }

      const gamma = displayScale === 'db' ? 0.72 : 0.30;
      for (let i = 0; i < linValues.length; i++) {
        let norm;
        if (displayScale === 'db') {
          const db = fieldQuantity === 'power'
            ? 10 * Math.log10(Math.max(linValues[i] / maxLinear, 1e-12))
            : 20 * Math.log10(Math.max(linValues[i] / maxLinear, 1e-6));
          norm = Math.max(0, Math.min(1, (Math.max(DB_FLOOR, db) - DB_FLOOR) / Math.abs(DB_FLOOR)));
          norm = Math.pow(norm, gamma);
        } else {
          norm = Math.pow(Math.max(0, Math.min(1, linValues[i] / maxLinear)), gamma);
        }
        normValues[i] = norm;
      }

      for (let py = 0; py < H; py++) {
        for (let px = 0; px < W; px++) {
          const i = py * W + px;
          const norm = normValues[i];
          let r, g, b, alpha;

          if (style === 'outline') {
            const shade = Math.round(10 + 95 * norm);
            r = g = b = shade;
            alpha = Math.round(150 + 105 * norm);
          } else if (style === 'waves') {
            const x = (px / (W - 1) - 0.5) * size;
            const y = (0.5 - py / (H - 1)) * size;
            const phaseBand = 0.5 + 0.5 * Math.cos(WAVENUMBER * Math.hypot(x, y) - fieldSliceTime * 2.5);
            const bandSharp = Math.pow(phaseBand, 2.4);
            const waveNorm = Math.max(0, Math.min(1, 0.18 * norm + 0.82 * norm * bandSharp));
            [r, g, b] = sliceColorMap(waveNorm);
            alpha = Math.round(sliceOnly ? 255 : 190 + 65 * norm);
          } else {
            [r, g, b] = sliceColorMap(norm);
            if (style === 'heat') {
              alpha = Math.round(sliceOnly ? 255 : 180 + 60 * norm);
            } else {
              alpha = Math.round(sliceOnly ? 255 : 200 + 55 * norm);
            }
          }

          const di = i * 4;
          data[di] = r;
          data[di + 1] = g;
          data[di + 2] = b;
          data[di + 3] = alpha;
        }
      }

      ctx.putImageData(img, 0, 0);

      // Smooth plot-like overlay: contour lines with real marching-square style segments.
      const levels = displayScale === 'db'
        ? [0.18, 0.30, 0.42, 0.54, 0.66, 0.78, 0.90]
        : [0.08, 0.14, 0.22, 0.34, 0.48, 0.64, 0.82];

      function interp(p1, p2, v1, v2, level) {
        const t = (level - v1) / ((v2 - v1) || 1e-9);
        return [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
      }

      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (const level of levels) {
        ctx.beginPath();
        ctx.lineWidth = level > 0.75 ? 2.0 : 1.15;
        ctx.strokeStyle = level > 0.75 ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.55)';

        for (let y = 0; y < H - 1; y += 2) {
          for (let x = 0; x < W - 1; x += 2) {
            const i00 = y * W + x;
            const i10 = y * W + (x + 1);
            const i11 = (y + 1) * W + (x + 1);
            const i01 = (y + 1) * W + x;
            const v00 = normValues[i00], v10 = normValues[i10], v11 = normValues[i11], v01 = normValues[i01];

            const pts = [];
            if ((v00 - level) * (v10 - level) < 0) pts.push(interp([x,y],[x+1,y],v00,v10,level));
            if ((v10 - level) * (v11 - level) < 0) pts.push(interp([x+1,y],[x+1,y+1],v10,v11,level));
            if ((v11 - level) * (v01 - level) < 0) pts.push(interp([x+1,y+1],[x,y+1],v11,v01,level));
            if ((v01 - level) * (v00 - level) < 0) pts.push(interp([x,y+1],[x,y],v01,v00,level));

            if (pts.length >= 2) {
              ctx.moveTo(pts[0][0], pts[0][1]);
              ctx.lineTo(pts[1][0], pts[1][1]);
              if (pts.length === 4) {
                ctx.moveTo(pts[2][0], pts[2][1]);
                ctx.lineTo(pts[3][0], pts[3][1]);
              }
            }
          }
        }
        ctx.stroke();
      }

      // Strong center cross and border makes orientation understandable.
      ctx.globalAlpha = 0.65;
      ctx.strokeStyle = 'rgba(0,0,0,0.65)';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(W/2, 0); ctx.lineTo(W/2, H);
      ctx.moveTo(0, H/2); ctx.lineTo(W, H/2);
      ctx.stroke();

      ctx.globalAlpha = 0.95;
      ctx.strokeStyle = 'rgba(255,255,255,0.88)';
      ctx.lineWidth = 2.2;
      ctx.strokeRect(1.5, 1.5, W - 3, H - 3);
      drawSliceLegend(ctx, W, H, displayScale, fieldQuantity);
      ctx.restore();

      fieldSliceTexture.needsUpdate = true;
      fieldSliceMesh.visible = true;
      fieldSliceNeedsRedraw = false;
    }



    // Fast separate 2D slice dashboard.
    // Heavy field calculations are cached on parameter changes; animation only redraws cached pixels.
    function getSlicePanelModes() { return ['azimuth', 'elevation', 'beam', 'top']; }

    function isSlicePanelModeEnabled(mode) {
      return true;
    }

    function getSliceExtent(mode='xy') {
      // Automatic sampled lambda width for polar cuts; no manual span UI.
      const dist = parseFloat(document.getElementById('observation-distance')?.value || '20');
      const xs = getActiveAntennaUserData().map(a => Math.abs(a.position.x || 0));
      const zs = getActiveAntennaUserData().map(a => Math.abs(a.position.z || 0));
      const aperture = Math.max(1, ...(xs.length ? xs : [1]), ...(zs.length ? zs : [1]));
      const autoWidth = Math.max(6, Math.min(2 * dist, 4 * aperture + 6));
      return Math.max(2, Math.min(160, autoWidth));
    }

    function isSliceDashboardVisible() {
      return true;
    }

    function applySliceDashboardVisibility() {
      const workspace = document.getElementById('visual-workspace');
      if (!workspace) return;
      workspace.classList.toggle('slice-panel-hidden', !isSliceDashboardVisible());
      updateSlicePlaneMarkers();
      onWindowResize();
    }

    function formatSliceValue(v, displayScale) {
      if (!Number.isFinite(v)) return '—';
      if (displayScale === 'db') return `${v.toFixed(1)} dB`;
      if (Math.abs(v) >= 100) return v.toFixed(0);
      if (Math.abs(v) >= 10) return v.toFixed(1);
      return v.toFixed(3);
    }

    function svgEl(name, attrs = {}) {
      const el = document.createElementNS('http://www.w3.org/2000/svg', name);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
      return el;
    }

    function sliceThemeColors() {
      const theme = getResolvedSlicePlotTheme();
      return theme === 'dark'
        ? { bg:'#050816', grid:'rgba(255,255,255,0.28)', axis:'rgba(255,255,255,0.78)', text:'#f8fafc', muted:'#cbd5e1', line:'#38bdf8', line2:'#f97316', hot:'#ffffff' }
        : { bg:'#ffffff', grid:'rgba(0,0,0,0.24)', axis:'rgba(0,0,0,0.80)', text:'#111827', muted:'#374151', line:'#2563eb', line2:'#dc2626', hot:'#111827' };
    }

    function contourPathFromGrid(values, W, H, level, VB) {
      function interp(p1, p2, v1, v2) {
        const t = (level - v1) / ((v2 - v1) || 1e-9);
        return [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
      }
      function sx(x) { return x / (W - 1) * VB; }
      function sy(y) { return y / (H - 1) * VB; }
      let d = '';
      for (let y = 0; y < H - 1; y++) {
        for (let x = 0; x < W - 1; x++) {
          const i00 = y * W + x;
          const i10 = y * W + (x + 1);
          const i11 = (y + 1) * W + (x + 1);
          const i01 = (y + 1) * W + x;
          const v00 = values[i00], v10 = values[i10], v11 = values[i11], v01 = values[i01];
          const pts = [];
          if ((v00 - level) * (v10 - level) < 0) pts.push(interp([sx(x),sy(y)],[sx(x+1),sy(y)],v00,v10));
          if ((v10 - level) * (v11 - level) < 0) pts.push(interp([sx(x+1),sy(y)],[sx(x+1),sy(y+1)],v10,v11));
          if ((v11 - level) * (v01 - level) < 0) pts.push(interp([sx(x+1),sy(y+1)],[sx(x),sy(y+1)],v11,v01));
          if ((v01 - level) * (v00 - level) < 0) pts.push(interp([sx(x),sy(y+1)],[sx(x),sy(y)],v01,v00));
          if (pts.length >= 2) {
            d += `M${pts[0][0].toFixed(2)},${pts[0][1].toFixed(2)}L${pts[1][0].toFixed(2)},${pts[1][1].toFixed(2)}`;
            if (pts.length === 4) d += `M${pts[2][0].toFixed(2)},${pts[2][1].toFixed(2)}L${pts[3][0].toFixed(2)},${pts[3][1].toFixed(2)}`;
          }
        }
      }
      return d;
    }

    function drawTopProjectionFrame(cache) {
      const svg = document.getElementById(`slice-panel-canvas-${cache.mode}`);
      if (!svg) return;
      const VB = 120, cx = 60, cy = 60, R = 47;
      const colors = sliceThemeColors();
      const theme = getResolvedSlicePlotTheme();
      const gridStroke = theme === 'dark' ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.22)';
      const gridStrokeStrong = theme === 'dark' ? 'rgba(255,255,255,0.58)' : 'rgba(0,0,0,0.55)';
      svg.setAttribute('viewBox', `0 0 ${VB} ${VB}`);
      svg.replaceChildren();
      svg.appendChild(svgEl('rect', { x:0, y:0, width:VB, height:VB, fill:colors.bg }));
      for (const rr of [0.25,0.5,0.75,1]) svg.appendChild(svgEl('circle', { cx, cy, r:(R*rr).toFixed(2), fill:'none', stroke:rr===1?gridStrokeStrong:gridStroke, 'stroke-width':rr===1?0.75:0.45 }));
      for (let deg=0; deg<360; deg+=30) {
        const a=deg*Math.PI/180;
        svg.appendChild(svgEl('line',{x1:cx,y1:cy,x2:(cx+Math.cos(a)*R).toFixed(2),y2:(cy-Math.sin(a)*R).toFixed(2),stroke:deg%90===0?gridStrokeStrong:gridStroke,'stroke-width':deg%90===0?0.55:0.32}));
      }
      const samples = cache.projectionSamples || [];
      const maxVal = Math.max(cache.projectionMax || 1e-18, 1e-18);
      const sorted = samples.slice().sort((a,b)=>a.val-b.val);
      for (const s of sorted) {
        const dbDivisor = cache.fieldQuantity === 'power' ? 10 : 20;
        const rn = cache.displayScale === 'db'
          ? Math.max(0, Math.min(1, ((dbDivisor*Math.log10(Math.max(s.val,1e-18)/maxVal)) + 40)/40))
          : Math.pow(Math.max(0, Math.min(1, s.val/maxVal)), 0.55);
        if (rn <= 0.015) continue;
        const rgb = sliceColorMap(rn);
        const alpha = 0.08 + 0.62 * rn;
        svg.appendChild(svgEl('circle', { cx:s.x.toFixed(2), cy:s.y.toFixed(2), r:(0.45 + 1.4*rn).toFixed(2), fill:`rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha.toFixed(3)})`, stroke:'none' }));
      }
      svg.appendChild(svgEl('circle', { cx, cy, r:R, fill:'none', stroke:colors.axis, 'stroke-width':0.75 }));
      const axisLabels = [['front', cx, cy - R - 3, 'middle'], ['back', cx, cy + R + 6, 'middle'], ['left', cx - R - 7, cy + 1, 'end'], ['right', cx + R + 7, cy + 1, 'start']];
      for (const [txt,x,y,anchor] of axisLabels) { const t = svgEl('text',{x:x.toFixed(1),y:y.toFixed(1),fill:colors.muted,class:'slice-axis-label','text-anchor':anchor}); t.textContent = txt; svg.appendChild(t); }
      // Numeric details are shown in the card header to avoid text overlapping the plot.
      svg.appendChild(svgEl('rect', { x:0.8, y:0.8, width:VB-1.6, height:VB-1.6, fill:'none', stroke:colors.axis, 'stroke-width':0.65 }));
    }

    function drawSlicePanelFrame(cache, animated) {
      if (cache.mode === 'top') { drawTopProjectionFrame(cache); return; }
      const svg = document.getElementById(`slice-panel-canvas-${cache.mode}`);
      if (!svg || !cache.normValues) return;
      const VB = 120;
      const colors = sliceThemeColors();
      const theme = getResolvedSlicePlotTheme();
      const size = cache.size || 1;
      const cx = 60, cy = 60, R = 45;
      svg.setAttribute('viewBox', `0 0 ${VB} ${VB}`);
      svg.replaceChildren();
      svg.appendChild(svgEl('rect', { x:0, y:0, width:VB, height:VB, fill:colors.bg }));

      const gridStroke = theme === 'dark' ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.26)';
      const gridStrokeStrong = theme === 'dark' ? 'rgba(255,255,255,0.58)' : 'rgba(0,0,0,0.55)';
      const fillUnder = theme === 'dark' ? 'rgba(56,189,248,0.13)' : 'rgba(37,99,235,0.10)';

      // Classic polar engineering grid: circular rings and angular spokes.
      const ringSpec = cache.displayScale === 'db'
        ? [{r:0.25,t:'-30'}, {r:0.50,t:'-20'}, {r:0.75,t:'-10'}, {r:0.92,t:'-3'}, {r:1.00,t:'0 dB'}]
        : [{r:0.25,t:'0.25'}, {r:0.50,t:'0.50'}, {r:0.75,t:'0.75'}, {r:1.00,t:'1.00'}];
      for (const item of ringSpec) {
        const rr = R * item.r;
        svg.appendChild(svgEl('circle', { cx, cy, r:rr.toFixed(2), fill:'none', stroke:item.r === 1 ? gridStrokeStrong : gridStroke, 'stroke-width': item.r === 1 ? 0.75 : 0.45 }));
      }
      for (let deg = 0; deg < 360; deg += 15) {
        const a = deg * Math.PI / 180;
        const x2 = cx + Math.cos(a) * R;
        const y2 = cy + Math.sin(a) * R;
        const major = deg % 45 === 0;
        svg.appendChild(svgEl('line', { x1:cx, y1:cy, x2:x2.toFixed(2), y2:y2.toFixed(2), stroke: major ? gridStrokeStrong : gridStroke, 'stroke-width': major ? 0.55 : 0.32, class:'slice-axis-line' }));
      }

      const angleLabels = [{t:'0°',x:cx+R+4,y:cy+1,a:'start'}, {t:'90°',x:cx,y:cy+R+6,a:'middle'}, {t:'180°',x:cx-R-4,y:cy+1,a:'end'}, {t:'270°',x:cx,y:cy-R-3,a:'middle'}];
      for (const l of angleLabels) { const txt = svgEl('text', { x:l.x.toFixed(1), y:l.y.toFixed(1), fill:colors.muted, class:'slice-axis-label', 'text-anchor':l.a }); txt.textContent = l.t; svg.appendChild(txt); }
      // Put radial scale labels on a diagonal helper line instead of the 0° axis,
      // so labels like 1.00 / 0 dB do not collide with the 0° angle marker.
      const labelAngle = -135 * Math.PI / 180;
      for (const item of ringSpec) {
        const rr = R * item.r;
        const txt = svgEl('text', {
          x:(cx + Math.cos(labelAngle) * rr - 1.0).toFixed(1),
          y:(cy + Math.sin(labelAngle) * rr - 0.8).toFixed(1),
          fill:colors.muted,
          class:'slice-ring-label',
          'text-anchor':'end'
        });
        txt.textContent = item.t;
        svg.appendChild(txt);
      }

      // Polar plot uses true angular samples in this cut plane, not a small image-space circle.
      // This fixes the old behaviour where steering changes only moved the lobe slightly.
      const samples = cache.polarSamples || [];
      let polarMax = Math.max(cache.polarMax || 0, 1e-18);
      let polarMaxDeg = Number.isFinite(cache.polarMaxDeg) ? cache.polarMaxDeg : 0;
      const pts = [];
      for (const s of samples) {
        let rn;
        if (cache.displayScale === 'db') {
          const dbDivisor = cache.fieldQuantity === 'power' ? 10 : 20;
          const db = dbDivisor * Math.log10(Math.max(s.val, 1e-18) / Math.max(polarMax, 1e-18));
          rn = Math.max(0, Math.min(1, (db + 40) / 40));
        } else {
          rn = Math.pow(Math.max(0, Math.min(1, s.val / Math.max(polarMax, 1e-18))), 0.72);
        }
        const th = s.deg * Math.PI / 180;
        pts.push([cx + Math.cos(th) * R * rn, cy + Math.sin(th) * R * rn, rn]);
      }
      let d = '';
      pts.forEach((p, i) => { d += `${i ? 'L' : 'M'}${p[0].toFixed(2)},${p[1].toFixed(2)}`; });
      d += 'Z';
      svg.appendChild(svgEl('path', { d, fill:fillUnder, stroke:'none' }));
      svg.appendChild(svgEl('path', { d, fill:'none', stroke:colors.line, 'stroke-width':1.15, 'stroke-linejoin':'round', 'stroke-linecap':'round' }));

      const maxA = polarMaxDeg * Math.PI / 180;
      const mx = cx + Math.cos(maxA) * R;
      const my = cy + Math.sin(maxA) * R;
      svg.appendChild(svgEl('circle', { cx:mx.toFixed(2), cy:my.toFixed(2), r:2.0, fill:colors.hot, stroke:colors.line2, 'stroke-width':0.75 }));
      svg.appendChild(svgEl('line', { x1:cx, y1:cy, x2:mx.toFixed(2), y2:my.toFixed(2), stroke:colors.line2, 'stroke-width':0.55, 'stroke-dasharray':'2 1.5' }));

      // Keep the plot area clean; labels, max value and dB comparison are outside the SVG.
      svg.appendChild(svgEl('rect', { x:0.8, y:0.8, width:VB-1.6, height:VB-1.6, fill:'none', stroke:colors.axis, 'stroke-width':0.65 }));
    }

    function rebuildSlicePanelCache() {
      if (!isSliceDashboardVisible()) { slicePanelNeedsRebuild = false; return; }
      updateSliceCardText();
      const modes = getSlicePanelModes();
      const controlsValues = getControlValues();
      const { patternType, fieldQuantity, displayScale, useApprox, subpatchDensity, couplingEnabled, couplingStrength } = controlsValues;
      const activeAntennas = getActiveAntennaUserData();
      const steeringDir = getSteeringDirection();
      const refObsDist = parseFloat(document.getElementById('observation-distance')?.value || '20');
      const referenceValue = activeAntennas.length
        ? calculateReferenceValue(activeAntennas, patternType, useApprox, steeringDir, subpatchDensity, refObsDist, fieldQuantity, couplingEnabled, couplingStrength)
        : 1;
      for (const mode of modes) {
        const card = document.querySelector(`[data-slice-card="${mode}"]`);
        const rangeEl = document.getElementById(`slice-panel-${mode}-range`);
        const enabled = isSlicePanelModeEnabled(mode);
        if (card) card.classList.toggle('slice-card-active', enabled);
        if (!enabled || activeAntennas.length === 0) {
          const svg = document.getElementById(`slice-panel-canvas-${mode}`);
          if (svg) {
            const colors = sliceThemeColors();
            svg.replaceChildren();
            svg.appendChild(svgEl('rect', {x:0,y:0,width:120,height:120,fill:colors.bg}));
            const txt = svgEl('text', {x:10,y:18,fill:colors.muted,class:'slice-vector-label'});
            txt.textContent = 'off';
            svg.appendChild(txt);
          }
          if (rangeEl) rangeEl.textContent = 'off';
          delete slicePanelCache[mode];
          continue;
        }

        const svg = document.getElementById(`slice-panel-canvas-${mode}`);
        if (!svg) continue;

        // Fast path: 2D views are angular patterns / projection maps, not old image-space slices.
        // Therefore we do not compute a dense 72×72 near-field grid for every panel anymore.
        // This removes thousands of field evaluations per slider movement and prevents stutter.
        const W = 1, H = 1;
        const rawValues = new Float32Array(1);
        const normValues = new Float32Array(1);
        let minRaw = 0, maxRaw = 0, maxIndex = 0;
        const size = getSliceExtent(mode);
        const { u, v } = getSliceBasis(mode, steeringDir);

        // Correct 2D antenna-pattern view:
        // It is the same field function used for the 3D radiation pattern, evaluated only
        // for directions constrained to a named antenna plane/cut. The UI avoids XYZ names.
        const patternRadius = Math.max(20, refObsDist);
        const polarSamples = [];
        const projectionSamples = [];
        let polarMax = 1e-18;
        let polarMaxDeg = 0;
        let polarRawAtMax = 1e-18;
        let projectionMax = 1e-18;
        if (mode === 'top') {
          const topStep = getRenderQuality().topStep;
          for (let elDeg = -90; elDeg <= 90; elDeg += topStep) {
            const el = elDeg * Math.PI / 180;
            const c = Math.cos(el), sy = Math.sin(el);
            for (let azDeg = 0; azDeg < 360; azDeg += topStep) {
              const az = azDeg * Math.PI / 180;
              const dir = new THREE.Vector3(Math.cos(az) * c, sy, Math.sin(az) * c).normalize();
              const field = calculateFieldAtPoint(dir.clone().multiplyScalar(patternRadius), activeAntennas, patternType, useApprox, steeringDir, subpatchDensity, couplingEnabled, couplingStrength);
              const val = Math.max(0, fieldLinearValue(field, fieldQuantity));
              const safeVal = Number.isFinite(val) ? val : 0;
              projectionMax = Math.max(projectionMax, safeVal);
              projectionSamples.push({ x: 60 + dir.x * 47, y: 60 + dir.z * 47, val: safeVal });
            }
          }
          polarMax = projectionMax;
        } else {
          const polarStep = getRenderQuality().polarStep;
          for (let deg = 0; deg <= 360; deg += polarStep) {
            const a = deg * Math.PI / 180;
            const dir = getAngularDirectionForPattern(mode, a, steeringDir);
            const field = calculateFieldAtPoint(dir.multiplyScalar(patternRadius), activeAntennas, patternType, useApprox, steeringDir, subpatchDensity, couplingEnabled, couplingStrength);
            const val = Math.max(0, fieldLinearValue(field, fieldQuantity));
            const safeVal = Number.isFinite(val) ? val : 0;
            polarSamples.push({ deg, val: safeVal, raw3d: safeVal });
            if (safeVal > polarMax) { polarMax = safeVal; polarMaxDeg = deg; polarRawAtMax = safeVal; }
          }
        }

        const sourcePoints = activeAntennas.map(a => {
          const aa = a.position.dot(u);
          const bb = a.position.dot(v);
          return { x: (aa / size + 0.5) * 120, y: (0.5 - bb / size) * 120 };
        }).filter(p => p.x >= -20 && p.x <= 140 && p.y >= -20 && p.y <= 140);
        slicePanelCache[mode] = { mode, rawValues, normValues, minRaw, maxRaw, maxIndex, size, displayScale, fieldQuantity, referenceValue, W, H, sourcePoints, polarSamples, polarMax, polarMaxDeg, polarRawAtMax, projectionSamples, projectionMax };
        if (rangeEl) {
          const ratio = Math.max(polarMax, 1e-18) / Math.max(referenceValue, 1e-18);
          const dbFactor = fieldQuantity === 'power' ? 10 : 20;
          rangeEl.textContent = `${formatSliceValue(polarMax, 'linear')} max, ${(dbFactor * Math.log10(Math.max(ratio, 1e-18))).toFixed(1)} dB vs 3D${mode === 'azimuth' ? ', elev ' + (getAzimuthCutElevationRad()*180/Math.PI).toFixed(0) + '°' : ''}`;
        }
        drawSlicePanelFrame(slicePanelCache[mode], false);
      }
      slicePanelNeedsRebuild = false;
    }

    function updateSlicePanelAnimation() {
      if (!isSliceDashboardVisible()) return;
      if (slicePanelNeedsRebuild) rebuildSlicePanelCache();
      const waves = document.getElementById('slice-panel-waves')?.checked;
      if (!waves) return;
      for (const mode of getSlicePanelModes()) {
        if (slicePanelCache[mode]) drawSlicePanelFrame(slicePanelCache[mode], false);
      }
    }

    function createSlicePlaneMarkers() {
      slicePlaneMarkerGroup = new THREE.Group();
      slicePlaneMarkerGroup.name = 'slice-plane-markers';
      scene.add(slicePlaneMarkerGroup);
      sliceRaycaster = new THREE.Raycaster();
      sliceTooltip = document.createElement('div');
      sliceTooltip.className = 'slice-tooltip';
      document.body.appendChild(sliceTooltip);
      const dom = renderer?.domElement;
      if (dom) {
        dom.addEventListener('pointermove', e => {
          const rect = dom.getBoundingClientRect();
          sliceMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          sliceMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        });
        dom.addEventListener('pointerleave', () => { sliceMouse.set(999,999); if (sliceTooltip) sliceTooltip.classList.remove('visible'); });
      }
    }

    function updateSlicePlaneMarkers() {
      if (!slicePlaneMarkerGroup) return;
      slicePlaneMarkerGroup.clear();
      if (!isSliceDashboardVisible()) return;
      const steeringDir = getSteeringDirection();
      const hoverMode = window.__hoveredSliceMode || null;
      const modes = getSlicePanelModes().filter(mode => document.getElementById(`slice-marker-${mode}`)?.checked || mode === hoverMode);
      const colors = { azimuth: 0x38bdf8, elevation: 0xf59e0b, beam: 0x34d399, top: 0xa78bfa };

      // Marker geometry is only an explanation helper. The plots themselves are calculated from directions.
      // Azimuth is a constant-elevation angular cut. Its helper is drawn as a horizontal cut level
      // on a reference sphere, not as the same plane as the Top Projection.
      // Top Projection uses a separate horizontal plane above the pattern, because it represents the footprint screen.
      const refRadius = Math.max(8, Math.min(36, parseFloat(document.getElementById('observation-distance')?.value || '20')));

      for (const mode of modes) {
        let mesh, edges;
        const color = colors[mode] || 0xffffff;

        if (mode === 'azimuth') {
          const elevRad = getAzimuthCutElevationRad();
          const elevDeg = elevRad * 180 / Math.PI;
          // Same spherical definition as the observation/steering point:
          // elevation 0° is the horizontal equator, elevation 90° is the top of the reference sphere.
          const y = Math.sin(elevRad) * refRadius;
          const diskRadius = Math.max(0.35, Math.cos(elevRad) * refRadius);

          const geo = new THREE.CircleGeometry(diskRadius, 160);
          const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: mode === hoverMode ? 0.24 : 0.105, side: THREE.DoubleSide, depthWrite: false });
          mesh = new THREE.Mesh(geo, mat);
          mesh.rotation.x = -Math.PI / 2;             // transparent horizontal circular cut surface
          mesh.position.y = y;
          mesh.renderOrder = 11;
          mesh.userData.sliceName = `Azimuth circular cut (${elevDeg.toFixed(0)}° elevation)`;
          slicePlaneMarkerGroup.add(mesh);

          const curve = new THREE.EllipseCurve(0, 0, diskRadius, diskRadius, 0, Math.PI * 2, false, 0);
          const pts = curve.getPoints(180).map(p => new THREE.Vector3(p.x, y, p.y));
          const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
          const lineMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: mode === hoverMode ? 1.0 : 0.9 });
          edges = new THREE.LineLoop(lineGeo, lineMat);
          edges.renderOrder = 12;
          edges.userData.sliceName = mesh.userData.sliceName;
          slicePlaneMarkerGroup.add(edges);
          continue;
        }

        if (mode === 'top') {
          const diskRadius = refRadius * 1.12;
          const geo = new THREE.CircleGeometry(diskRadius, 160);
          const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: mode === hoverMode ? 0.24 : 0.105, side: THREE.DoubleSide, depthWrite: false });
          mesh = new THREE.Mesh(geo, mat);
          mesh.rotation.x = -Math.PI / 2;             // circular horizontal projection screen
          mesh.position.y = refRadius * 1.08;         // above the lobe/pattern as projection screen
          mesh.renderOrder = 11;
          mesh.userData.sliceName = 'Top projection circular screen (visual footprint)';
          slicePlaneMarkerGroup.add(mesh);

          const curve = new THREE.EllipseCurve(0, 0, diskRadius, diskRadius, 0, Math.PI * 2, false, 0);
          const pts = curve.getPoints(180).map(p => new THREE.Vector3(p.x, mesh.position.y, p.y));
          const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
          edges = new THREE.LineLoop(lineGeo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: mode === hoverMode ? 1.0 : 0.9 }));
          edges.renderOrder = 12;
          edges.userData.sliceName = mesh.userData.sliceName;
          slicePlaneMarkerGroup.add(edges);
          continue;
        }

        const diskRadius = refRadius;
        const geo = new THREE.CircleGeometry(diskRadius, 160);
        const mat = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: mode === hoverMode ? 0.24 : 0.105,
          side: THREE.DoubleSide,
          depthWrite: false
        });
        mesh = new THREE.Mesh(geo, mat);
        const { u, v, normal } = getSliceBasis(mode, steeringDir);
        mesh.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(u, v, normal));
        mesh.renderOrder = 11;
        const markerNames = {
          elevation:'Elevation circular vertical cut through current steering azimuth',
          beam:'Beam-plane circular vertical cut through current beam direction'
        };
        mesh.userData.sliceName = markerNames[mode] || 'Pattern helper';
        slicePlaneMarkerGroup.add(mesh);

        const curve = new THREE.EllipseCurve(0, 0, diskRadius, diskRadius, 0, Math.PI * 2, false, 0);
        const edgePtsLocal = curve.getPoints(180).map(p => new THREE.Vector3(p.x, p.y, 0));
        const edgeGeo = new THREE.BufferGeometry().setFromPoints(edgePtsLocal);
        edges = new THREE.LineLoop(
          edgeGeo,
          new THREE.LineBasicMaterial({ color, transparent: true, opacity: mode === hoverMode ? 1.0 : 0.9 })
        );
        edges.quaternion.copy(mesh.quaternion);
        edges.renderOrder = 12;
        edges.userData.sliceName = mesh.userData.sliceName;
        slicePlaneMarkerGroup.add(edges);
      }
    }

    function updateSliceHoverTooltip() {
      if (!sliceRaycaster || !slicePlaneMarkerGroup || !sliceTooltip || sliceMouse.x > 10) return;
      sliceRaycaster.setFromCamera(sliceMouse, camera);
      const hits = sliceRaycaster.intersectObjects(slicePlaneMarkerGroup.children, false);
      if (hits.length) {
        const label = hits[0].object.userData.sliceName || 'Slice plane';
        const dom = renderer.domElement;
        const rect = dom.getBoundingClientRect();
        sliceTooltip.textContent = label;
        sliceTooltip.style.left = `${rect.left + (sliceMouse.x + 1) * 0.5 * rect.width}px`;
        sliceTooltip.style.top = `${rect.top + (-sliceMouse.y + 1) * 0.5 * rect.height}px`;
        sliceTooltip.classList.add('visible');
      } else {
        sliceTooltip.classList.remove('visible');
      }
    }



    // Real 3D cutaway: remove one half of the lobe with a GPU clipping plane.
    function createCutawayHelpers() {
      cutawayOutlineGroup = new THREE.Group();
      scene.add(cutawayOutlineGroup);

      const capGeo = new THREE.PlaneGeometry(1, 1, 1, 1);
      const capMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      cutawayCapMesh = new THREE.Mesh(capGeo, capMat);
      cutawayCapMesh.renderOrder = 20;
      cutawayCapMesh.visible = false;
      scene.add(cutawayCapMesh);
    }

    function getCutawayControls() {
      return {
        mode: document.getElementById('cutaway-mode')?.value || 'off',
        offset: parseFloat(document.getElementById('cutaway-offset')?.value || '0')
      };
    }

    function cutawayBasisFromNormal(normal) {
      const n = normal.clone().normalize();
      const helper = Math.abs(n.y) > 0.88 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
      const u = new THREE.Vector3().crossVectors(helper, n).normalize();
      const v = new THREE.Vector3().crossVectors(n, u).normalize();
      return { u, v, n };
    }

    function updateCutawayHelpers(normal, offset, size) {
      if (!cutawayCapMesh || !cutawayOutlineGroup) return;
      const { u, v, n } = cutawayBasisFromNormal(normal);
      const matrix = new THREE.Matrix4().makeBasis(u, v, n);
      cutawayCapMesh.quaternion.setFromRotationMatrix(matrix);
      cutawayCapMesh.position.copy(n.clone().multiplyScalar(offset));
      cutawayCapMesh.scale.set(size, size, 1);
      cutawayCapMesh.visible = true;

      cutawayOutlineGroup.clear();
      const half = size / 2;
      const corners = [
        u.clone().multiplyScalar(-half).add(v.clone().multiplyScalar(-half)).add(n.clone().multiplyScalar(offset)),
        u.clone().multiplyScalar( half).add(v.clone().multiplyScalar(-half)).add(n.clone().multiplyScalar(offset)),
        u.clone().multiplyScalar( half).add(v.clone().multiplyScalar( half)).add(n.clone().multiplyScalar(offset)),
        u.clone().multiplyScalar(-half).add(v.clone().multiplyScalar( half)).add(n.clone().multiplyScalar(offset)),
        u.clone().multiplyScalar(-half).add(v.clone().multiplyScalar(-half)).add(n.clone().multiplyScalar(offset))
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(corners);
      const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 }));
      line.renderOrder = 21;
      cutawayOutlineGroup.add(line);
    }

    function updateCutaway() {
      if (!patternMesh || !patternMesh.material) return;
      const { mode, offset } = getCutawayControls();

      if (mode === 'off') {
        patternMesh.material.clippingPlanes = [];
        patternMesh.material.needsUpdate = true;
        if (cutawayCapMesh) cutawayCapMesh.visible = false;
        if (cutawayOutlineGroup) cutawayOutlineGroup.clear();
        return;
      }

      let normal;
      if (mode === 'xpos') normal = new THREE.Vector3(-1, 0, 0);      // keep x <= offset
      else if (mode === 'xneg') normal = new THREE.Vector3(1, 0, 0);   // keep x >= offset
      else if (mode === 'ypos') normal = new THREE.Vector3(0, -1, 0);  // keep y <= offset
      else if (mode === 'zpos') normal = new THREE.Vector3(0, 0, -1);  // keep z <= offset
      else {
        // Beam cut: remove the half in front of the steering-normal side,
        // so rotating steering gives a meaningful opened view.
        normal = getSteeringDirection().clone().multiplyScalar(-1).normalize();
      }

      // Three.js plane keeps points where normal.dot(point) + constant >= 0.
      cutawayPlane.normal.copy(normal);
      cutawayPlane.constant = -normal.dot(normal.clone().multiplyScalar(offset));

      patternMesh.material.clippingPlanes = [cutawayPlane];
      patternMesh.material.needsUpdate = true;

      const obsDist = parseFloat(document.getElementById('observation-distance')?.value || '20');
      const size = Math.max(8, Math.min(65, obsDist * 1.45));
      updateCutawayHelpers(normal, offset, size);
    }



    // Update all visual elements
    function updateAllVisuals() {
      lastVisualUpdateMs = performance.now();
        updateSubpatchDensityAvailability();
      elementCurrentCache.key = null;
      updateObjectPositions();
      updateFarFieldPattern();
      updateWaves();
      updateVectors();
      updateObservationInfo();
      fieldSliceNeedsRedraw = true;
      updateFieldSlice();
      slicePanelNeedsRebuild = true;
      updateSlicePlaneMarkers();
      rebuildSlicePanelCache();
      updateCutaway();
    }
    
    // Update positions of steering and observation points
    function updateObjectPositions() {
        const obsPos = getObservationDirection();
        const steeringDir = getSteeringDirection();
        observationPoint.position.copy(obsPos);
        steeringPoint.position.copy(steeringDir).multiplyScalar(obsPos.length());
    }

    // Update wave line visualizations
    function updateWaves() {
      waveGroup.clear();
      if (!document.getElementById('show-waves').checked) return;
      const obsPos = observationPoint.position;
      antennaGroup.children.forEach(base => {
        if (!base.userData.active) return;
        const points = [base.position.clone().setY(base.position.y + 0.1), obsPos];
        const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineDashedMaterial({ color: 0x0ea5e9, dashSize: 0.2, gapSize: 0.1, opacity: 0.7, transparent: true }));
        line.computeLineDistances();
        waveGroup.add(line);
      });
    }

    function updateVectors() {
      vectorGroup.clear();
      if (!document.getElementById('show-vectors').checked) return;
      const obsPos = observationPoint.position;
      antennaGroup.children.forEach(base => {
        if (!base.userData.active) return;
        const start = base.position.clone().setY(base.position.y + 0.18);
        const dir = obsPos.clone().sub(start);
        const len = dir.length();
        if (len < 1e-6) return;
        const arrow = new THREE.ArrowHelper(dir.clone().normalize(), start, Math.min(len, 2.5), 0xf59e0b, 0.18, 0.08);
        vectorGroup.add(arrow);
      });
    }

    // Update the text-based info panel
    function updateObservationInfo() {
      const { patternType, fieldQuantity, subpatchDensity, couplingEnabled, couplingStrength } = getControlValues();
      const steeringDir = getSteeringDirection();
      const obsPos = getObservationDirection();
      const activeAntennas = antennaGroup.children.filter(a => a.userData.active).map(a => a.userData);
      
      const exactField = calculateFieldAtPoint(obsPos, activeAntennas, patternType, false, steeringDir, subpatchDensity, couplingEnabled, couplingStrength);
      document.getElementById('array-factor-value').textContent = fieldDisplayValue(exactField, fieldQuantity).toFixed(3);
      document.getElementById('exact-field-real-part-value').textContent = exactField.real.toFixed(3);

      const useApprox = document.getElementById('calculation-method').value === 'true';
      const approxInfoDiv = document.getElementById('approx-field-info');
      approxInfoDiv.style.display = useApprox ? 'block' : 'none';
      if (useApprox) {
          const approxField = calculateFieldAtPoint(obsPos, activeAntennas, patternType, true, steeringDir, subpatchDensity, couplingEnabled, couplingStrength);
          document.getElementById('approx-field-real-part-value').textContent = approxField.real.toFixed(3);
      }
      
      const phaseList = document.getElementById('steering-phase-info');
      phaseList.innerHTML = '';
      const elementCurrents = getElementCurrents(activeAntennas, steeringDir, couplingEnabled, couplingStrength);
      activeAntennas.forEach(antenna => {
          const phaseDeg = (WAVENUMBER * antenna.position.dot(steeringDir) * 180 / Math.PI).toFixed(2);
          const I = elementCurrents.get(antenna.index) || { re: 1, im: 0 };
          const magI = Math.sqrt(I.re * I.re + I.im * I.im).toFixed(2);
          const angleI = (Math.atan2(I.im, I.re) * 180 / Math.PI).toFixed(1);
          const li = document.createElement('li');
          li.textContent = couplingEnabled
            ? `Antenna (${antenna.position.x},${antenna.position.y},${antenna.position.z}): feed ${phaseDeg}°, solved I = ${magI} ∠ ${angleI}°`
            : `Antenna (${antenna.position.x},${antenna.position.y},${antenna.position.z}): ${phaseDeg}°`;
          phaseList.appendChild(li);
      });
    }

    // Sync observation sliders to steering sliders
    function syncObservationToSteering() {
        const steerAz = document.getElementById('steering-azimuth').value;
        const steerEl = document.getElementById('steering-elevation').value;
        document.getElementById('observation-azimuth').value = steerAz;
        document.getElementById('observation-elevation').value = steerEl;
        document.getElementById('observation-azimuth-value').textContent = document.getElementById('steering-azimuth-value').textContent;
        document.getElementById('observation-elevation-value').textContent = document.getElementById('steering-elevation-value').textContent;
        const obsAzInput = document.getElementById('observation-azimuth-input');
        const obsElInput = document.getElementById('observation-elevation-input');
        if (obsAzInput) obsAzInput.value = steerAz;
        if (obsElInput) obsElInput.value = steerEl;
        scheduleProgressiveVisuals();
    }
    

    function escapeReportHTML(value) {
      return String(value ?? '').replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
    }

    function getSelectText(id) {
      const el = document.getElementById(id);
      if (!el) return '—';
      return el.options && el.selectedIndex >= 0 ? el.options[el.selectedIndex].textContent.trim() : el.value;
    }

    function getInputValue(id, suffix='') {
      const el = document.getElementById(id);
      return el ? `${el.value}${suffix}` : '—';
    }

    function getDegreeInput(id) {
      const el = document.getElementById(id);
      const v = el ? Number(el.value) : NaN;
      return Number.isFinite(v) ? Math.round(v) : 0;
    }

    function getAzimuthCutTitle() {
      const choice = document.getElementById('azimuth-cut-elevation')?.value || 'steering';
      const elDeg = Math.round(getAzimuthCutElevationRad() * 180 / Math.PI);
      if (choice === 'steering') return `Azimuth pattern — horizontal cut at steering elevation = ${elDeg}°`;
      if (elDeg === 0) return 'Azimuth pattern — horizontal cut at elevation = 0°';
      return `Azimuth pattern — horizontal cut at elevation = ${elDeg}°`;
    }

    function getAzimuthCutShort() {
      const choice = document.getElementById('azimuth-cut-elevation')?.value || 'steering';
      const elDeg = Math.round(getAzimuthCutElevationRad() * 180 / Math.PI);
      return choice === 'steering' ? `steering elevation ${elDeg}°` : `elevation ${elDeg}°`;
    }

    function getElevationCutTitle() {
      return `Elevation pattern — vertical cut at azimuth = ${getDegreeInput('steering-azimuth')}°`;
    }

    function getBeamPlaneTitle() {
      return `Beam-plane pattern — cut through steering direction (${getDegreeInput('steering-azimuth')}°, ${getDegreeInput('steering-elevation')}°)`;
    }

    function getTopProjectionTitle() {
      return 'Top projection — visual footprint from above';
    }

    function updateSliceCardText() {
      const titles = {
        azimuth: getAzimuthCutTitle(),
        elevation: getElevationCutTitle(),
        beam: getBeamPlaneTitle(),
        top: getTopProjectionTitle()
      };
      for (const [mode, title] of Object.entries(titles)) {
        const card = document.querySelector(`[data-slice-card="${mode}"]`);
        const label = card?.querySelector('.slice-card-head strong');
        if (label) label.textContent = title;
        if (card) card.title = title;
      }
    }

    function getReportExplanationHTML() {
      const azTitle = getAzimuthCutTitle();
      const elTitle = getElevationCutTitle();
      const beamTitle = getBeamPlaneTitle();
      const topTitle = getTopProjectionTitle();
      return `
        <section class="report-card">
          <h2>How to read this report</h2>
          <p><strong>3D radiation view:</strong> the distance from the centre in each direction represents relative radiation strength.</p>
          <p><strong>Radiation model:</strong> in <em>Ground plane</em> mode, the lower half-space (user-facing −z direction) is suppressed and the pattern represents upward radiation. In <em>Free space</em> mode, no ground plane is assumed and radiation can exist on both sides of the array.</p>
          <p><strong>${escapeReportHTML(azTitle)}:</strong> horizontal angular cut at a fixed elevation. When this cut is set to <strong>elevation = 0°</strong>, it is the standard top-direction pattern. If set to steering, it follows the current steering elevation.</p>
          <p><strong>${escapeReportHTML(elTitle)}:</strong> vertical angular cut at the current steering azimuth. This shows how the pattern changes upward and downward in that azimuth plane.</p>
          <p><strong>${escapeReportHTML(beamTitle)}:</strong> angular cut through the currently steered beam direction. This view is useful because it always contains the main beam.</p>
          <p><strong>${escapeReportHTML(topTitle)}:</strong> visual footprint of the 3D pattern from above. It is a helper visualization, not the physical radiation pattern.</p>
          <p><strong>Distance in Fraunhofer mode:</strong> in the Fraunhofer far-field model the normalized pattern depends on direction, not on the selected observation distance. The distance slider only moves the visual observation marker; it does not change the normalized dB lobe shape.</p>
          <p><strong>Subpatch density:</strong> this setting only affects the prescribed-current Huygens model. In Fraunhofer far-field mode it is disabled because the far-field array-factor calculation does not use subpatch discretization.</p>
        </section>`;
    }

    function getCurrentSettingsHTML() {
      const cfg = getArrayConfig ? getArrayConfig() : {};
      const sp = cfg.spacing;
      const distanceText = isFraunhoferMode()
        ? `${escapeReportHTML(getInputValue('observation-distance',' λ'))} <span class="report-muted">(display marker only; Fraunhofer far field uses direction, so distance does not change the normalized pattern)</span>`
        : `${escapeReportHTML(getInputValue('observation-distance',' λ'))}`;
      return `
        <section class="report-card">
          <h2>Current settings</h2>
          <table class="report-table"><tbody>
            <tr><th>Steering direction</th><td>Azimuth ${escapeReportHTML(getInputValue('steering-azimuth','°'))}, Elevation ${escapeReportHTML(getInputValue('steering-elevation','°'))}</td></tr>
            <tr><th>Observation direction</th><td>Azimuth ${escapeReportHTML(getInputValue('observation-azimuth','°'))}, Elevation ${escapeReportHTML(getInputValue('observation-elevation','°'))}, Distance ${distanceText}</td></tr>
            <tr><th>Antenna type</th><td>${escapeReportHTML(getSelectText('pattern-type'))}</td></tr>
            <tr><th>Radiation model</th><td>${escapeReportHTML(getSelectText('radiation-model'))}</td></tr>
            <tr><th>Pattern display</th><td>${escapeReportHTML(getSelectText('pattern-display'))}</td></tr>
            <tr><th>Displayed quantity</th><td>${escapeReportHTML(getSelectText('field-quantity'))}</td></tr>
            <tr><th>Display scale</th><td>${escapeReportHTML(getSelectText('display-scale'))}</td></tr>
            <tr><th>Field model</th><td>${escapeReportHTML(getSelectText('calculation-method'))}</td></tr>
            <tr><th>Azimuth cut elevation</th><td>${escapeReportHTML(getAzimuthCutShort())}</td></tr>
            <tr><th>Array mode</th><td>${document.getElementById('custom-array-enabled')?.checked ? 'Advanced custom coordinates' : 'Regular rectangular grid'}</td></tr>
            <tr><th>Taper</th><td>${escapeReportHTML(getSelectText('amplitude-taper'))}, Chebyshev SLL ${escapeReportHTML(getInputValue('chebyshev-sidelobe',' dB'))}</td></tr>
            <tr><th>Mutual coupling</th><td>${document.getElementById('mutual-coupling-toggle')?.checked ? 'On' : 'Off'} (${escapeReportHTML(getInputValue('coupling-strength',' dB'))})</td></tr>
            <tr><th>Subpatch density</th><td>${isFraunhoferMode() ? 'Not used in Fraunhofer far-field mode; only active in the prescribed-current Huygens model.' : escapeReportHTML(getInputValue('subpatch-density',' × ' + (document.getElementById('subpatch-density')?.value || '')))}</td></tr>
          </tbody></table>
        </section>`;
    }

    function getPlotSnapshotsHTML() {
      return [
        ['slice-panel-canvas-azimuth', getAzimuthCutTitle()],
        ['slice-panel-canvas-elevation', getElevationCutTitle()],
        ['slice-panel-canvas-beam', getBeamPlaneTitle()],
        ['slice-panel-canvas-top', getTopProjectionTitle()]
      ].map(([id,title]) => {
        const svg = document.getElementById(id);
        return `<figure class="report-plot"><figcaption>${escapeReportHTML(title)}</figcaption>${svg ? svg.outerHTML : '<p>Missing plot</p>'}</figure>`;
      }).join('');
    }

    function getAntennaReportHTML() {
      let rows = [];
      try {
        const steeringDir = getSteeringDirection();
        const cv = getControlValues();
        const activeAntennas = antennaGroup?.children?.filter(a => a.userData?.active).map(a => a.userData) || [];
        const currents = getElementCurrents(activeAntennas, steeringDir, cv.couplingEnabled, cv.couplingStrength);
        rows = activeAntennas.map(a => {
          const u = a.userCoords || { x: a.position.x, y: a.position.z, z: a.position.y };
          const feedDeg = WAVENUMBER * a.position.dot(steeringDir) * 180 / Math.PI;
          const I = currents.get(a.index) || { re: 1, im: 0 };
          const imag = Math.sqrt(I.re*I.re + I.im*I.im);
          const iph = Math.atan2(I.im, I.re) * 180 / Math.PI;
          const amp = Number.isFinite(a.amp) ? a.amp.toFixed(3) : (a.amp ?? 1);
          const ph = Number.isFinite(a.phaseDeg) ? a.phaseDeg.toFixed(2) : (a.phaseDeg ?? 0);
          return `<tr><td>${escapeReportHTML(a.index)}</td><td>[${Number(u.x).toFixed(3)}, ${Number(u.y).toFixed(3)}, ${Number(u.z).toFixed(3)}]</td><td>${escapeReportHTML(amp)}</td><td>${escapeReportHTML(ph)}°</td><td>${feedDeg.toFixed(2)}°</td><td>${imag.toFixed(3)} ∠ ${iph.toFixed(1)}°</td></tr>`;
        });
      } catch (e) {
        rows = [`<tr><td colspan="6">Could not read antenna table: ${escapeReportHTML(e.message)}</td></tr>`];
      }
      return `
        <section class="report-card">
          <h2>Active antenna elements and currents</h2>
          <p class="report-small">Positions are <strong>normalized to wavelength λ</strong>. Example: <strong>[1, 1, 1]</strong> means x = 1λ, y = 1λ and z = 1λ. User coordinates use <strong>[x, y, z]</strong>: x/y are the array surface coordinates and z is height. The report uses the user-facing convention.</p>
          <table class="report-table report-elements"><thead><tr><th>#</th><th>Position [x,y,z] λ</th><th>Amplitude</th><th>Manual phase</th><th>Steering feed phase</th><th>Solved current</th></tr></thead><tbody>${rows.join('')}</tbody></table>
        </section>`;
    }

    function getRadiationModelReportHTML() {
      const ground = hasGroundPlane();
      const body = ground
        ? `<p><strong>Ground plane mode:</strong> a perfect ground plane is assumed below the array. Radiation into the user-facing <strong>−z</strong> half-space is suppressed, so the patch model effectively radiates into the <strong>+z</strong> half-space. For beginners: the ground plane can be imagined like a mirror that redirects radiation upward. This is a simplified visualization model, not a full EM ground-plane solver.</p>`
        : `<p><strong>Free-space mode:</strong> no ground plane is assumed. The element pattern is allowed to radiate on both sides of the array, so the lower half-space is not suppressed and no mirror source is used.</p>`;
      return `<section class="report-card"><h2>Radiation environment</h2>${body}</section>`;
    }

    function getCustomCoordinatesHTML() {
      const enabled = document.getElementById('custom-array-enabled')?.checked;
      const text = document.getElementById('custom-array-coordinates')?.value || '';
      if (!enabled) return '';
      return `<section class="report-card"><h2>Advanced custom coordinate input</h2><pre class="report-pre">${escapeReportHTML(text)}</pre></section>`;
    }

    function printPhasedArrayReport() {
      try { updateSliceCardText(); } catch (e) {}
      try { updateAllVisuals(); } catch (e) {}
      try { controls?.update(); renderer?.render(scene, camera); } catch (e) {}
      let image3d = '';
      try { image3d = renderer.domElement.toDataURL('image/png'); } catch (e) { image3d = ''; }
      const generated = new Date().toLocaleString();
      const reportHTML = `<!doctype html><html><head><meta charset="utf-8"><title>Phased Array Radiation Pattern Report</title>
        <link rel="stylesheet" href="css/responsive-fixes.css"></head><body>
          <div class="report-header">
            <div><h1>Phased Array Radiation Pattern Report</h1><div class="report-sub">Generated ${escapeReportHTML(generated)} · phased-array-simulator.com</div></div>
            <button class="no-print" onclick="window.print()" style="padding:8px 14px;border-radius:999px;border:0;background:#111827;color:white;font-weight:700;">Print / Save PDF</button>
          </div>
          <div class="report-grid">
            <section class="report-card report-3d"><h2>3D radiation view</h2>${image3d ? `<img src="${image3d}" alt="3D radiation pattern snapshot">` : '<p>3D snapshot unavailable.</p>'}</section>
            <section class="report-card"><h2>2D radiation views</h2><div class="report-plots">${getPlotSnapshotsHTML()}</div></section>
          </div>
          <div class="report-grid report-section-full">${getReportExplanationHTML()}${getCurrentSettingsHTML()}</div>
          <div class="report-section-full">${getRadiationModelReportHTML()}</div>
          <div class="report-section-full">${getAntennaReportHTML()}</div>
          <div class="report-section-full">${getCustomCoordinatesHTML()}</div>
        </body></html>`;
      const win = window.open('', '_blank', 'width=1400,height=900');
      if (!win) { alert('Popup blocked. Please allow popups to print the report.'); return; }
      win.document.open();
      win.document.write(reportHTML);
      win.document.close();
      win.focus();
      setTimeout(() => { try { win.print(); } catch (e) {} }, 550);
    }

    // Animation loop
    let animationFrameCounter = 0;
    function animate() {
      requestAnimationFrame(animate);
      animationFrameCounter++;
      controls.update();
      const quality = getRenderQuality();
      const animateThisFrame = animationFrameCounter % quality.frameSkip === 0;
      fieldSliceTime += isPhoneLayout() ? 0.02 : 0.035;
      const sliceMode = document.getElementById('field-slice-mode')?.value || 'off';
      const sliceStyle = document.getElementById('field-slice-style')?.value || 'contour';
      if (animateThisFrame && sliceMode !== 'off' && sliceStyle === 'waves') updateFieldSlice();
      if (animateThisFrame && !isPhoneLayout()) updateSlicePanelAnimation();
      if (!isCoarsePointerDevice()) updateSliceHoverTooltip();
      renderer.render(scene, camera);
    }

    // Window resize handler
    function onWindowResize() {
      const container = document.getElementById('canvas-container');
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(getRenderQuality().dpr);
        renderer.setSize(container.clientWidth, container.clientHeight, false);
      }
    }

    function attachAntennaCheckboxListeners() {
        ANTENNA_POSITIONS.forEach(({ index }) => {
            const el = document.getElementById(`antenna-${index}`);
            if (!el) return;
            el.onchange = e => {
                const antenna = antennaGroup.children.find(c => c.userData.index === index);
                if (antenna) {
                    antenna.userData.active = e.target.checked;
                    antenna.userData.elementMesh.material.color.set(e.target.checked ? ACTIVE_COLOR : INACTIVE_COLOR);
                    updateAllVisuals();
                }
            };
        });
    }

    function isFraunhoferMode() {
        return document.getElementById('calculation-method')?.value === 'true';
    }

    function updateSubpatchDensityAvailability() {
        const sliderWrap = document.getElementById('subpatch-density-slider');
        const slider = document.getElementById('subpatch-density');
        const valueEl = document.getElementById('subpatch-density-value');
        if (!sliderWrap || !slider || !valueEl) return;
        const disabled = isFraunhoferMode();
        slider.disabled = disabled;
        sliderWrap.classList.toggle('is-disabled', disabled);
        sliderWrap.title = disabled
          ? 'Subpatch density is only used by the prescribed-current Huygens model. It has no effect in Fraunhofer far-field mode.'
          : 'Subpatch density is active for the prescribed-current Huygens model.';
        valueEl.textContent = disabled ? 'not used' : `${slider.value}x${slider.value}`;
    }

    function formatAngleValue(value) {
        const n = Number(value);
        if (!Number.isFinite(n)) return '0';
        return Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/, '');
    }

    function clampNumberInputValue(inputEl) {
        const min = Number(inputEl.min || -Infinity);
        const max = Number(inputEl.max || Infinity);
        let value = Number(inputEl.value);
        if (!Number.isFinite(value)) value = min === -Infinity ? 0 : min;
        value = Math.max(min, Math.min(max, value));
        inputEl.value = formatAngleValue(value);
        return inputEl.value;
    }

    function syncAngleNumberInput(id) {
        const slider = document.getElementById(id);
        const numberInput = document.getElementById(`${id}-input`);
        const valueEl = document.getElementById(`${id}-value`);
        if (!slider || !numberInput) return;
        numberInput.value = formatAngleValue(slider.value);
        if (valueEl) valueEl.textContent = `${formatAngleValue(slider.value)}°`;
    }

    function setupAngleNumberInput(id) {
        const slider = document.getElementById(id);
        const numberInput = document.getElementById(`${id}-input`);
        if (!slider || !numberInput) return;
        syncAngleNumberInput(id);
        numberInput.addEventListener('input', () => {
            const value = clampNumberInputValue(numberInput);
            slider.value = value;
            const valueEl = document.getElementById(`${id}-value`);
            if (valueEl) valueEl.textContent = `${formatAngleValue(value)}°`;
            if (id.startsWith('steering') && document.getElementById('sync-observation-toggle')?.checked) {
                syncObservationToSteering();
            } else {
                scheduleProgressiveVisuals();
            }
        });
    }

    // Attaching all event listeners
    function setupEventListeners() {
        document.getElementById('language-select').addEventListener('change', e => applyTranslations(e.target.value));
        
        // Sliders
        ['steering-azimuth', 'steering-elevation', 'observation-azimuth', 'observation-elevation', 'observation-distance', 'subpatch-density', 'coupling-strength', 'array-x-count', 'array-z-count', 'element-spacing', 'chebyshev-sidelobe', 'cutaway-offset', 'slice-size'].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('input', e => {
                const valueEl = document.getElementById(`${id}-value`);
                if (id.includes('density')) valueEl.textContent = `${e.target.value}x${e.target.value}`;
                else if (id === 'array-x-count' || id === 'array-z-count') valueEl.textContent = `${e.target.value}`;
                else if (id === 'element-spacing') valueEl.textContent = `${Number(e.target.value).toFixed(2)}λ`;
                else if (id === 'chebyshev-sidelobe') valueEl.textContent = `${e.target.value} dB`;
                else if (id === 'cutaway-offset') valueEl.textContent = `${Number(e.target.value).toFixed(1)}`;
                else if (id === 'slice-size') valueEl.textContent = `${Number(e.target.value).toFixed(0)}`;
                else if (id.includes('coupling-strength')) {
                    const db = Number(e.target.value);
                    const lin = Math.pow(10, db / 20);
                    valueEl.textContent = `${db.toFixed(0)} dB (≈${lin.toFixed(2)})`;
                }
                else valueEl.textContent = `${e.target.value}${id.includes('distance') ? '' : '°'}`;

                if (['steering-azimuth', 'steering-elevation', 'observation-azimuth', 'observation-elevation'].includes(id)) {
                    syncAngleNumberInput(id);
                }
                
                if (['array-x-count', 'array-z-count', 'element-spacing'].includes(id)) {
                    renderAntennaCheckboxes();
                    createAntennas();
                    attachAntennaCheckboxListeners();
                    scheduleProgressiveVisuals();
                    return;
                }

                if (id.startsWith('steering') && document.getElementById('sync-observation-toggle').checked) {
                    syncObservationToSteering();
                } else {
                    scheduleProgressiveVisuals();
                }
            });
        });

        ['steering-azimuth', 'steering-elevation', 'observation-azimuth', 'observation-elevation'].forEach(setupAngleNumberInput);

        // Toggles
        ['custom-array-enabled', 'sync-observation-toggle', 'show-observation-point-toggle', 'show-steering-point-toggle', 'show-waves', 'show-vectors', 'show-pattern', 'normalize-pattern-toggle', 'mutual-coupling-toggle', 'slice-marker-azimuth', 'slice-marker-elevation', 'slice-marker-beam', 'slice-marker-top'].forEach(id => {
            const toggleEl = document.getElementById(id);
            if (!toggleEl) return;
            toggleEl.addEventListener('change', e => {
                if (id === 'custom-array-enabled') { renderAntennaCheckboxes(); createAntennas(); attachAntennaCheckboxListeners(); }
                if (id === 'sync-observation-toggle' && e.target.checked) syncObservationToSteering();
                observationPoint.visible = document.getElementById('show-observation-point-toggle').checked;
                steeringPoint.visible = document.getElementById('show-steering-point-toggle').checked;
                updateAllVisuals();
            });
        });

        const applyCustomBtn = document.getElementById('apply-custom-array');
        if (applyCustomBtn) applyCustomBtn.addEventListener('click', () => {
            const enabled = document.getElementById('custom-array-enabled');
            if (enabled) enabled.checked = true;
            renderAntennaCheckboxes();
            createAntennas();
            attachAntennaCheckboxListeners();
            updateAllVisuals();
        });
        const customText = document.getElementById('custom-array-coordinates');
        if (customText) customText.addEventListener('input', () => {
            if (document.getElementById('custom-array-enabled')?.checked) {
                renderAntennaCheckboxes();
                createAntennas();
                attachAntennaCheckboxListeners();
                updateAllVisuals();
            }
        });

        const slicePanelWaves = document.getElementById('slice-panel-waves');
        if (slicePanelWaves) slicePanelWaves.addEventListener('change', () => {
            if (slicePanelWaves.checked) updateSlicePanelAnimation();
            else { for (const mode of getSlicePanelModes()) if (slicePanelCache[mode]) drawSlicePanelFrame(slicePanelCache[mode], false); }
        });

        const slicePlotTheme = document.getElementById('slice-plot-theme');
        if (slicePlotTheme) {
            applySlicePlotTheme();
            slicePlotTheme.addEventListener('change', applySlicePlotTheme);
        }

        // Hovering a 2D plot temporarily shows its matching 3D slice plane.
        getSlicePanelModes().forEach(mode => {
            const card = document.querySelector(`[data-slice-card="${mode}"]`);
            if (!card) return;
            card.addEventListener("pointerenter", () => {
                window.__hoveredSliceMode = mode;
                card.classList.add("slice-card-hover");
                updateSlicePlaneMarkers();
            });
            card.addEventListener("pointerleave", () => {
                if (window.__hoveredSliceMode === mode) window.__hoveredSliceMode = null;
                card.classList.remove("slice-card-hover");
                updateSlicePlaneMarkers();
            });
        });


        const printReportBtn = document.getElementById('print-report');
        if (printReportBtn) printReportBtn.addEventListener('click', printPhasedArrayReport);
        const dashFullscreen = document.getElementById('slice-dashboard-fullscreen');
        if (dashFullscreen) dashFullscreen.addEventListener('click', () => document.getElementById('slice-dashboard')?.requestFullscreen?.());

        const toggle2d = document.getElementById('toggle-2d-panel');
        if (toggle2d) toggle2d.addEventListener('click', () => {
            const workspace = document.getElementById('visual-workspace');
            if (!workspace) return;
            const collapsed = workspace.classList.toggle('slice-2d-collapsed');
            toggle2d.textContent = collapsed ? 'Show 2D' : 'Hide 2D';
            requestAnimationFrame(() => { onWindowResize(); updateFieldSlice(); rebuildSlicePanelCache(); });
        });

        const workFullscreen = document.getElementById('workspace-fullscreen');
        if (workFullscreen) workFullscreen.addEventListener('click', () => {
            const workspace = document.getElementById('visual-workspace');
            if (!workspace) return;
            if (isPhoneLayout()) {
                const expanded = workspace.classList.toggle('mobile-expanded');
                document.body.classList.toggle('mobile-big-preview', expanded);
                workFullscreen.textContent = expanded ? 'Sticky view' : 'Big view';
                requestAnimationFrame(() => { onWindowResize(); updateFieldSlice(); rebuildSlicePanelCache(); });
                if (expanded) workspace.scrollIntoView({ block: 'start', behavior: 'smooth' });
                return;
            }
            workspace.requestFullscreen?.();
        });
        
        // Selects
        ['calculation-method', 'pattern-type', 'radiation-model', 'pattern-display', 'field-quantity', 'display-scale', 'amplitude-taper', 'field-slice-mode', 'field-slice-style', 'field-slice-view', 'cutaway-mode', 'azimuth-cut-elevation'].forEach(id => {
            const selectEl = document.getElementById(id);
            if (!selectEl) return;
            selectEl.addEventListener('change', () => {
                if (id === 'pattern-type') createAntennas();
                if (id === 'calculation-method') updateSubpatchDensityAvailability();
                updateAllVisuals();
            });
        });

        attachAntennaCheckboxListeners();
        updateSubpatchDensityAvailability();
    }


    function setupWorkspaceResizeControls() {
      const workspace = document.getElementById('visual-workspace');
      const divider = document.getElementById('workspace-resizer');
      const heightHandle = document.getElementById('workspace-height-resizer');
      if (!workspace) return;

      const savedW = isPhoneLayout() ? null : localStorage.getItem('phasor_left_panel_width');
      const savedH = isPhoneLayout() ? null : localStorage.getItem('phasor_workspace_height');
      if (savedW) workspace.style.setProperty('--left-panel-width', savedW);
      if (savedH) workspace.style.setProperty('--workspace-height', savedH);
      if (isPhoneLayout()) {
        workspace.classList.remove('workspace-compact-height','mobile-expanded');
        document.body.classList.remove('mobile-big-preview');
        const wf = document.getElementById('workspace-fullscreen');
        if (wf) wf.textContent = 'Big view';
      }
      // Remove old separate 2D/3D compact states from previous cached versions.
      workspace.classList.remove('two-d-compact','two-d-collapsed','three-d-compact','three-d-collapsed');
      localStorage.removeItem('phasor_workspace_layout');

      const updateLayoutButtons = () => {
        const b = document.getElementById('toggle-workspace-compact');
        if (b) b.textContent = workspace.classList.contains('workspace-compact-height') ? '2D/3D restore' : '2D/3D small';
      };
      const setCompactHeight = (compact) => {
        if (compact) {
          const currentH = workspace.style.getPropertyValue('--workspace-height') || localStorage.getItem('phasor_workspace_height') || 'clamp(420px, 58vh, 720px)';
          if (currentH !== '180px') localStorage.setItem('phasor_workspace_restore_height', currentH);
          workspace.classList.add('workspace-compact-height');
          workspace.style.setProperty('--workspace-height', '180px');
          localStorage.setItem('phasor_workspace_height', '180px');
          localStorage.setItem('phasor_workspace_compact_height', '1');
        } else {
          const restoreH = localStorage.getItem('phasor_workspace_restore_height') || 'clamp(420px, 58vh, 720px)';
          workspace.classList.remove('workspace-compact-height');
          workspace.style.setProperty('--workspace-height', restoreH);
          localStorage.setItem('phasor_workspace_height', restoreH);
          localStorage.setItem('phasor_workspace_compact_height', '0');
        }
        updateLayoutButtons();
      };
      if (localStorage.getItem('phasor_workspace_compact_height') === '1') setCompactHeight(true);
      else updateLayoutButtons();
      document.getElementById('toggle-workspace-compact')?.addEventListener('click', () => {
        setCompactHeight(!workspace.classList.contains('workspace-compact-height'));
        refresh();
      });

      let draggingX = false;
      let draggingY = false;
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const refresh = () => requestAnimationFrame(() => { onWindowResize(); });

      if (divider) {
        divider.addEventListener('pointerdown', (e) => {
          draggingX = true;
          divider.setPointerCapture?.(e.pointerId);
          document.body.style.userSelect = 'none';
          e.preventDefault();
        });
      }
      if (heightHandle) {
        heightHandle.addEventListener('pointerdown', (e) => {
          draggingY = true;
          heightHandle.setPointerCapture?.(e.pointerId);
          document.body.style.userSelect = 'none';
          e.preventDefault();
        });
      }
      window.addEventListener('pointermove', (e) => {
        if (draggingX && workspace) {
          const rect = workspace.getBoundingClientRect();
          const minPx = 170;
          const maxPx = Math.max(minPx, rect.width - 190);
          const leftPx = clamp(e.clientX - rect.left, minPx, maxPx);
          const pct = (leftPx / rect.width) * 100;
          const val = `${pct.toFixed(2)}%`;
          workspace.style.setProperty('--left-panel-width', val);
          localStorage.setItem('phasor_left_panel_width', val);
          updateLayoutButtons();
          refresh();
        }
        if (draggingY && workspace) {
          const rect = workspace.getBoundingClientRect();
          const top = rect.top;
          const maxH = Math.max(340, Math.min(window.innerHeight * 0.86, 900));
          const h = clamp(e.clientY - top, 120, maxH);
          workspace.classList.remove('workspace-compact-height');
          localStorage.setItem('phasor_workspace_compact_height', '0');
          const val = `${Math.round(h)}px`;
          workspace.style.setProperty('--workspace-height', val);
          localStorage.setItem('phasor_workspace_height', val);
          refresh();
        }
      });
      window.addEventListener('pointerup', () => {
        if (draggingX || draggingY) {
          draggingX = draggingY = false;
          document.body.style.userSelect = '';
          refresh();
        }
      });
      if (window.ResizeObserver) new ResizeObserver(refresh).observe(workspace);
      document.addEventListener('fullscreenchange', refresh);
    }

    function setupCanvasViewControls() {
      const container = document.getElementById('canvas-container');
      const slider = document.getElementById('canvas-height-slider');
      const value = document.getElementById('canvas-height-value');
      const fullBtn = document.getElementById('fullscreen-3d');
      if (!container || !fullBtn) return;

      function setCanvasHeight(px) {
        const height = `${px}px`;
        container.style.setProperty('--canvas-height', height);
        if (value) value.textContent = height;
        onWindowResize();
      }

      if (slider) slider.addEventListener('input', (e) => setCanvasHeight(e.target.value));
      if (window.ResizeObserver) new ResizeObserver(onWindowResize).observe(container);
      fullBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) container.requestFullscreen();
        else document.exitFullscreen();
      });
      container.addEventListener('dblclick', () => {
        if (!document.fullscreenElement) container.requestFullscreen();
      });
      document.addEventListener('fullscreenchange', onWindowResize);
      if (slider && value) value.textContent = 'drag';
      onWindowResize();
    }

    // DOM Ready
    document.addEventListener('DOMContentLoaded', () => {
        init();
        setupEventListeners();
        setupCanvasViewControls();
        setupWorkspaceResizeControls();
        setupThemeSelector();
        setupCanvasThemeSelector();
        applySliceDashboardVisibility();
        applyTranslations(document.getElementById('language-select').value);
    });
  
