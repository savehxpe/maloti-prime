# AA_TrackingSystems.pdf

## Rivelatori di Particelle – Prof. A. Andreazza 

Tracking systems 

Sistemi traccianti: indice 

#  Lezione 1, 31/05: generalità sulle misure di posizione e momento 

#  Lezione 2, 05/06: sistemi di rivelatori, pattern recognition e track fit 

#  Esercitazioni pratiche (opzionali) 

## –  14,16/06 alle 14 in Laboratorio Calcolo:  

## simulazione di un rivelatore tracciante 

#  Appendice delle lezioni sui rivelatori a semiconduttore:  12/06 Seminario rivelatori CMOS (E. Zaffaroni) 

GENERALITY OF POSITION AND MOMENTUM MEASUREMENTS 

## 1.  What is the purpose of a tracking system 2.  Helical trajectory and its approximations 3.  Position measurements 

### 1.  intrinsic resolution 2.  multiple scattering effects 3.  vertex reconstrution 

## 4.  Momentum measurements 

### 1.  intrinsic resolution 2.  multiple scattering effects 

The legacy of visual detectors 

##  Many progress in particle physics by looking at events: 

### –  find particle trajectories, –  find where they interact –  find where they decay 

The legacy of visual detectors 

##  Many progress in particle physics by looking at events: 

### –  find particle trajectories, –  find where they interact –  find where they decay 

##  Nothing has changed when moving to fully electronics readout 

### –  but density of measurements… 

##  Tracking is all about building an image of the particle interactions with few observed points.  

−−+−−−+− 

−+−−+− 

→→→ 

→→→ 

222 0* 

222 * 2 

0 2 

11 00 

1 * 111 

* 1 

0 1 

,,)2 

,,)1 

πππνµ 

ππνµ 

KDDDDB KDDDDB

ATLAS event (low pile-up) 

ATLAS event at √s=13 TeV 

CMS event 

Particle detector structure 

Momentum measurement decay vertex reconstruction, hadron identification Low material (~1X0) 

Electron idenfication, photon detection ~20X0, 1-2λI 

Charged hadron absorption, neutral hadron detectionr 5-6λI 

Identification of muons with enough energy to cross the calorimeters (>2-3 GeV) 

Tracking system goals 

# 1. Reconstruct charged-particle trajectories (tracks) 

## –  join points to form a track (pattern recognition) –  measure direction and position –  measure momentum and charge (with magnetic field) –  Two major configurations: 

###  inner spectrometers 

###  muon systems 

# 2. Reconstruct decay and interaction vertices 

## –  “primary” vertex: collision point where most particle are 

## produced –  “secondary” vertices:  

###  decay of unstable particles 

###  interaction with detector material 

## –  evaluate compatibility of tracks with primary vertex 

###  “weaker” way to detect interaction or unstable particles. 

THE HELIX  AND ITS APPROXIMATIONS 

Superconducting magnets 

### Tracking systems are usually embedded in a magnetic field in order to measure particle momentum through curvature 

###  typical values 0.5-4 T  

###  solenoid, toroid, dipole configurations all used 

Motion in a magnetic field 

###  The equation of motion of a charged particle in a magnetic field is: 

###  The relativistic formula for the momentum is  pc = ε v/c with –  ε particle energy –  v particle velocity 

###  The equation of motion becomes: 

###  multiplying by v ( v is perpendicular to both dv and  v×B ) 

###  This is the well-know feature the magnetic 

### field does not perform work on the particle: energy if a constant of motion. 

###  The final equation of motions is: 

###  linear velocity precess with angular velocity Ωv 

###  if v is normal to B the trajectory is a circumference with a revolution period T = 2π/Ωv 

–  in the non-relativistic case: T=cost. –  in the relativistic case: T∝γ 

###  To find the circumference radius: 

###  giving momentum in GeV, the radius in meters and magnetif field in Tesla 

dp dt 

= ev ×B 

dp dt 

= 1 c2 dε dt v + ε 

c2 dv dt 

= ev ×B 

dε dt = 0 

dv dt 

= v ×Ωv Ωv = eB ε 

c2 

2πR T 

= v → R = vT 2π 

= v Ωv 

R = vε eBc2 

βε = pc 

p = 0.299792458RB 

R = p eB 

p = 0.3RB

Motion in a magnetic field 

###  The equation of motion of a charged particle in a magnetic field is: 

###  Since the B field does not change the energy of the particle: 

###  Using the length along the path 

###  One obtains: 

###  Finally 

###  In case of inhomogeneous magnetic field 

### B(s) varies along the track, and to find the trajectory r(s) one needs to solve numerically the differential equation. 

###  In case of homogeneous magnetic field, the trajectory is given by an helix. 

dp dt 

= ev ×B 

mγ dv dt 

= ev ×B 

ds = vdt 

mγ d 2r dt2 

= e dr dt ×B 

mγv d 2r ds2 

= e dr ds ×B 

d2r ds2 

= e p dr ds ×B 

### λ 

The helix equation 

###  The helix can be described in a parametric form 

###  λ is the dip-angle 

###  h=±1 is the sense  

### of rotation of the helix 

###  The projection on the xy-plane is a circle: 

###  x0 and y0 are the coordinates at s=0 

###  Φ0 is also related to the slope of the tangent  

### to the circle at s=0 

### λ 

x(s) = x0 + R cos Φ0 + hscosλ 

R ⎛ ⎝ ⎜ 

⎞ ⎠ ⎟ − cosΦ0 

⎡ ⎣⎢ 

⎤ ⎦⎥ 

y(s) = y0 + R sin Φ0 + hscosλ 

R ⎛ ⎝ ⎜ 

⎞ ⎠ ⎟ − sinΦ0 

⎡ ⎣⎢ 

⎤ ⎦⎥ 

z(s) = z0 + ssinλ 

x − x0 + RcosΦ0( )2 + y − y0 + RsinΦ0( )2 = R2

High-pT parabolic approximation 

###  In the helix equation: –  The s=0 point is an arbitrary choice –  A common use case is when the track is 

### reconstructed in a region of size ≪R 

###  pT=1 GeV, B=2 T, R=1.7 m 

###  radius of ATLAS tracking system is 1.05 

### m 

###  …or if interested in the proximity of 

### the interaction region:  b, c, τ decay in few mm 

###  Choose as reference point the closest one to the origin of the reference frame (i.e. detector center) –  “perigee” 

###  Write as a Taylor expansion in s/R  –  this is an approximation! 

###  error ~s3/R2  –  but it will be very useful for future 

### examples 

[m]  [T] 30 [GeV] T R B. p = 

## Φ0 

High-pT parabolic approximation 

###  Development in s/R: 

###  we can now introduce the “perigee” parameters: 

###  impact parameter d0:  notice it has a sign! 

###  the direction of the track at the perigee φ0:  

###  the curvature   which includes the sign of the charge 

###  and the polar angle 

λ 

λ λ 

λ λ 

sin)( 

sincos 2 1coscos)( 

coscos 2 1sincos)( 

0 

0 

22 

00 

0 

22 

00 

szsz R 

shsysy 

R shsxsx 

+= 

Φ−Φ+= 

Φ−Φ−= 

000000 sin,cos Φ=Φ= hdyhdx 

0000 cossin,sincos Φ−=Φ= hh ϕϕ 

R h 

=κ 

λ π 

ϑ −= 2 

ϑ 

ϕϑκϕϑϕ 

ϕϑκϕϑϕ 

cos)( cossinsinsincos)( sinsincossinsin)( 

0 

0 22 

2 1 

000 

0 22 

2 1 

000 

szsz ssdsy ssdsx 

+= 

−+= 

++−= 

# Φ0 

High-pT parabolic approximation 

###  Starting from the parametric trajectory 

###  It is now interesting to define a change of coordinates with the x-axis directed along the 

### track direction:   

###  In these coordinates the trajectory has a simple expression in the “transverse” and “longitudinal” planes:  

### –  Often r=√(x2+y2) is used instead of ρ:  

###  this is a “double” approximation valid for rd0 

### –  If rotating to an axis “near” to the particle direction (the jet-axis for example) 

###  This will be our “workhorse”   

ρ = xcosϕ0 + ysinϕ0 ʹy = −xsinϕ0 + ycosϕ0 

x(s) = −d0 sinφ0 + ssinϑ cosφ0 + 1 2κs 

2 sin2ϑ sinφ0 y(s) = d0 cosφ0 + ssinϑ sinφ0 − 1 

2κs 2 sin2ϑ cosφ0 

z(s) = z0 + scosϑ 

ρ(s) = ssinϑ !y (s) = d0 − 1 

2κs 2 sin2ϑ 

z(s) = z0 + scosϑ 

z = z0 + ρ cotϑ ʹy = d0 − 1 

2κρ 2 

2 2 1 

jet00 )tan( κρϕϕρ −−+=ʹ dy

POSITION MEASUREMENTS 

## The region near the interaction vertex 

Decay vertex reconstruction 

###  In proximity of the interaction region, at first order, it is possible to neglect the curvature:  –  focus on position and direction. –  Example: detection of short-lived particles 

###  There is a group of particles with lifetimes of ~1 ps 

###  The flight length L can be measurable: 

###  To estimate the order of magnitued of the 

### decay angle ψ, let’s consider at which angle, with respect to the flight direcfion, a particle, emitted at an angle θ* in the rest frame of the mother particle, is observed in the laboratory frame: 

###  in the lab frame: 

###  therefore the  decay angle is: 

###  Some typical examples: –  Symmetric B-factory:  

### ϒ(4S) at rest γ=1.002, β=0.06, L~30 µm, ψ~1 

### –  Asymmetric B-factory: e- 9 GeV, e+ 3.1 GeV γ=1.15, β=0.5, L~290 µm, ψ~1 

### –  High energy collisions (LEP, Tevatron, LHC) γ=5-10, β=1, L=2-3 mm, ψ~0.1 

B 

L 

ψ 

L = γβct 

p*µ = ( p* p* sinθ * 0 p* cosθ * ) 

sinψ = 1 γ 

sinθ * 

1+β cosθ * 

pµ = [ γ p*(1+β cosθ *) p* sinθ * 0 γ p*(cosθ * +β) ] 

=O 1 γ 

⎛ 

⎝ ⎜ ⎞ 

⎠ ⎟

Impact parameter 

###  It is useful to introduce the impact parameter d, defined at the distance between the daugther particle trajectory and the mother particle production point:   

###  for relativistic particles is approximately independent of the boost. 

###  An experimental apparatus with decay vertex capabilities must be able to separate the production and devay vertices: 

###   σL/L«1 

###  As a practical examples, let’s consider a relativistic 

### situation, where we can approximate:   tanψ ≈ ψ ≈ sinψ  

### and set the x-axis direction along the mother particle flight direction. 

###  This apparatus reconstructs trajectories   y=tanψix+di 

### with measurement uncertainty σd  

(σψ is negligible in most practical cases) 

###  The decay vertex position is given by the intersection of two trajectories:  

d = Lsinψ 

L = d2 − d1 tanψ1 − tanψ2 

≈ d2 − d1 ψ1 −ψ2 

B 

L ψ 

d 

=O γβcτ( )×O 1 γ 

" 

# $ % 

& ' 

=O σ d 

d 

! 

" # 

$ 

% & 

2 1 

2 dL 

L d d σσ 

= − 

y = tanψ1x + d1 y = tanψ2x + d2 

! " # 

$# 

dO c σ τ 

⎛ ⎞= ⎜ ⎟ ⎝ ⎠ 

=O cτ( )

Impact parameter resolution 

###  Let’s assume a pair of detector layers –  at positions x1 and x2, –  with a y coordinate measurement 

### resolution σy1 and σy2. 

###  The reconstructed trajectory is 

###  If σy1=σy2=σy the impact parameter 

### uncertainty is given by     where n=x2 /x1 is referred to “lever arm”  

###  The geometrical coefficient n front of σy is  is always greater than 1. 

###  x1 should be as small as possible. Usually limited by the accelerator beam pipe.  

###  x2 is limited by cost 

(x1,y1) (x2,y2) 

12 

1 

12 

1 

xx xx 

yy yy 

− 

− = 

− 

− 

( ) yd n n 

σσ 2 

2 

1 1 

− 

+ = 

12 

2112 0 

12 

12 

xx yxyxd 

xx yym 

− 

− = 

− 

− = 

⎟ ⎟ ⎟ ⎟ 

⎠ 

⎞ 

⎜ ⎜ ⎜ ⎜ 

⎝ 

⎛ 

∂ 

∂ 

∂ 

∂ ∂ 

∂ 

∂ 

∂ 

⎟ ⎟ ⎠ 

⎞ ⎜ ⎜ ⎝ 

⎛ 

⎟ ⎟ ⎟ ⎟ 

⎠ 

⎞ 

⎜ ⎜ ⎜ ⎜ 

⎝ 

⎛ 

∂ 

∂ 

∂ 

∂ ∂ 

∂ 

∂ 

∂ 

= 

22 

0 

11 

0 

2 2 

2 1 

21 

2 

0 

1 

0 

, 0 0 

0 

y m 

y d 

y m 

y d 

y m 

y m 

y d 

y d 

C y 

y md σ 

σ 

( ) ( ) 

( ) ⎟ ⎟ ⎠ 

⎞ ⎜ ⎜ ⎝ 

⎛ 

++− 

+−+ 

− 2 2 

2 1 

2 21 

2 12 

2 21 

2 12 

2 2 

2 1 

2 1 

2 2 

2 12 

1 yyyy 

yyyy 

xx xxxx 

xx σσσσ 

σσσσ

Multiple scattering 

###  All’uscita in di un materiale una particella subisce: –  una deviazione θp 

### –  uno spostamento εp 

###  spesso εp è trascurabile. 

###  Non è sempre il caso per grandi 

### spessori: –  es.: nell’attraversamento dei 

### calorimetri tra tracciatore interno e e sistema a muoni 

###  Si può dimostrare che: –  dato: 

###  –  vale: 

###  Il coefficiente di correlazione tra θp e εp è √3/2=0.87 

###  Hint: scrivere la formula per spessori discreti e passare al continuo. 

θ p 2 = KX, K = 

13.6 MeV βcp 

z⎛ ⎝ ⎜ 

⎞ ⎠ ⎟ 

2 1 X0 

εp 2 = 

1 3 KX 3 

εpθ p = 1 2 KX 2

Impact parameter resolution: multiple scattering 

###  Multiple scattering has a critical role in determining the impact parameter resolution. 

###  Every material layer crossed by the particle before reaching the detector introduce a random deviations with r.m.s.     

###  This devation contributes to the track parameter uncertainties:   where R is the distance between the interaction point and the material layer. 

###  Summing all contribution in quadrature: 

###  The sum runs on all material layers till the first measured point (included). 

###  The formula for θp is valid only in a plane perpendicular to the track. If it is inclined by an angle ϑ with respect to the xy plane, the scattering angle is amplified by a geometrical factor 1/sinϑ. 

###  Also the thickness X of the crossed material layer increases by an additional factor 1/sin1/2ϑ. 

### (x1,y1) (x2,y2) 

⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ += 

00 

ln038.01MeV 6.13 X X 

X Xz 

cpp β θ 

δd0 = −R ⋅θ p δm =θ p 

⎟ ⎟ ⎟ 

⎠ 

⎞ 

⎜ ⎜ ⎜ 

⎝ 

⎛ 

− 

− = 

### ∑∑ ∑∑ 

i ip 

i ipi 

i ipi 

i ipi 

md R 

RR C 2 

, 2 , 

2 , 

2 , 

2 

,0 θθ 

θθ 

relevant for thin sensors 

θ2/3sin 1 

p ≈ 

radiation length 

Impact parameter and vertex reconstruction 

###  Often the impact parameter resolution is para- meterized as 

σ d =σ tracking ⊕ σms µm ⋅GeV⎡⎣ ⎤⎦ psin3/2ϑ

Some practical examples 

### DELPHI SLD 

### detector type microstrips CCD 

### pitch 25 µm (lettura 50 µm) 20 µm x 20 µm  

### beam pipe R=5.25 cm, l=0.4% X0 R=2.35 cm, l=0.5% X0 

### first detector layer R=6.3 cm, l=0.5% X0 R=2.80 cm, l=0.4% X0 

### last detector layer R=10.7 cm, l=0.5% X0 R=4.83 cm, l=0.4% X0 

### point resolution 8 µm 4.4 µm 

2 2 2 1 

2 1 d y 

x x x x 

σ σ + 

= − 

σ d =σ tracking ⊕ σms 

psin3/2ϑ 

### ∑= 

i 

iid R 2 ,0 

2θσ 

### σtracking 20 µm 11 µm 

### σms 65 µm×GeV 33 µm×GeV measured values 

MOMENTUM MEASUREMENT 

## Determining curvature 

Momentum measurement (sagitta) 

###  A widespread method, if it is possible to insert detectors inside the magnetic field, consists of measuring the sagitta of the particle trajectory: 

###  Numerically: 

###  And the relative momentum resolution is: 

###  In the case the sagitta is measured by only three detectors: 

L/2 L/2 

R 

θ/2 

### s = R[1-cos(θ/2)] Detectors 

p qBL 

RRs 

8 

82 cos1 

2 

2 

= 

≈⎟ ⎠ 

⎞ ⎜ ⎝ 

⎛ −= θθ 

[GeV/c] [m][T]3.0[m] 2 

p LBs = 

( ) 

2222 tracking, 

312 

221 4 1 

4 1 

2 1 

yyys 

yyys 

σσσσ ++= 

+−= 

s sp 

BL p 

sp σ 

σσ 23.0 

8 == 

(x1,y1) 

(x2,y2) 

(x3,y3) 

Momentum measurement: multiple scattering 

L/2 L/2 

R 

θ/2 

### s = R[1-cos(θ/2)] Detectors 

(x1,y1) 

(x2,y2) 

(x3,y3) 

###  In case of deflection in the detector material:    and therefore a multiple scattering contribution of  

###  Adding the two contributions: 

###  And the momentum resolution becomes 

###  –  The resolutions improves linearly with B 

### and with the detector resolution. –  It improves quadratically with L –  The relative uncertainty on momentum  

### is constant at low momentum (MS), but increases linearly with  increasing momentum.  

23221312 22 1 

22 δθδδδδθδθδδθδ LyysLLyLy −=−=⇒+== 

2,2 ps L θσ = 

( )MStracking23.0 8 

σσ σσ 

⊕== p BLsp 

sp 

ps MS 

tracking σ 

σσ ⊕=

Momentum measurement (bending) 

###  A widely used method consists of the measurements of the bending of the track direction after crossing a magnetic field. 

###  A particle moving across a region with a constant magnetic field will get a pulse of    

###  The more general formula for non-constant magnetic field is:    

###  It is therefore possible to determine the momentum of a particle by the angular deviation after crossing a magnetic field: 

###  Also in this case, the relative uncertainty worsen with increasing momentum: 

L/2 L/2 

R 

θ/2 

qBLRpLpT =≈Δ / 

### ∫≈Δ BdlqpT 

TT 

T 

p 

Bdlq 

### p p ∫= 

Δ 

≈θ 

### ∫ 

== Bdlq 

p p 

T 

T 

pT θθ σ θ σσ 

### bending power 

CMS: Compact Muon Solenoid 

ATLAS Muon Spectrometer 

###  Instrumented air-core toroid system: 

###  bending power 1-7.5 Tm 

###  standalone momentum reconstruction capability σpT/pT = 10% at pT=1 TeV 

Forward toroid 

TRACK FITTING AND FINDING 

## 1.  Kalman filter 2.  Other approaches to fitting 3.  Elements of track finding 4.  Examples of tracking systems 

Kalman filter 

##  Step-by-step updating procedure: 

### –  use initial estimation of track parameters –  extrapolate to next measured point –  compare extrapolation with measurement –  derive updated track parameters 

##  Continue adding all points one at the time.   

##  For each point invert a matrix of size equal to 

## the track parameters 

### –  computation time is Nd3 instead of N3 

### –  N=number of measurements –  d=number of track paramenters 

##  Comparison allows for rejection of outliers 

### –  can also be used during pattern recognition 

Kalman filter 

###  Only providing basic idea of Kalman filtering –  one iteration of the fit, from detector 

### plane k-1 to k –  see bibliography(*) for more details 

###  At plane k-1 we have: –  pk-1: estimation of the track parameters –  Ck-1: covariance matrix 

###  Extrapolation to plane k: –  new parameters: 

### –  Jakobian matrix: 

### –  covariance matrix of the extrapolated parameters:   

###  Mms: includes the multiple scattering uncertainty in the extrapolation. 

###  On surface k we have some measurements mk with covariance Vk. 

###  The updated parameters pk are obtained my minimizing a 𝜒2 including: –  comparison of mk with expectations 

### yk (pk) from the track model –  the extrapolated parameters 

pk = f pk−1( ) 

!Ck = FCk−1FT +Mms 

F = ∂f ∂p 

pk−1( ) 

χ 2 = mk − yk (pk )( )TVk−1 mk − yk (pk )( ) + pk −pk( )T Ck 

−1 pk −pk( ) 

(*) Boch, Grote, Notz, Regler, Data analysis techniques in high energy physics experiments, Cambridge University Press 1990  

Kalman filter: straight line example 

###  Initial estimate of track parameters using j, k 

###  Extrapolate to point i:         which gives contribution to the 𝜒2 for the parameters at i: 

( )jjj zzbay −+= 

⎟ ⎟ ⎟ 

⎠ 

⎞ 

⎜ ⎜ ⎜ 

⎝ 

⎛ 

− 

−=⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ = 

jk 

jk 

j 

j 

j j 

zz yy 

y 

b a 

p 

( ) ⎟ ⎟ ⎟ ⎟ ⎟ 

⎠ 

⎞ 

⎜ ⎜ ⎜ ⎜ ⎜ 

⎝ 

⎛ 

− 

+ 

− − 

− − 

= 

2 

222 

2 2 

jk 

yy 

jk 

y 

jk 

y y 

j 

zzzz 

zz 

kjj 

j 

j 

σσσ 

σ σ 

C 

( ) ( )iiijjj zzbayzzbay −+=⇒−+= 

( ) ⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ −− =⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ = 

j 

ijjj 

i 

i i b 

zzba b a ~ ~ 

~p 

( ) ⎟ ⎟ ⎠ 

⎞ ⎜ ⎜ ⎝ 

⎛ 

− 

−− + ⎟ ⎟ 

⎠ 

⎞ 

⎜ ⎜ 

⎝ 

⎛ 

+−−−− 

−−−−−+− 

− = 

1 )( 

)()( )()()()(1~ 2 

2 ,2222 

222222 

2 ij 

ijij jp 

yyyijyik 

yijyikyijyik 

jk j zz 

zzzz zzzz 

zzzzzzzz 

zz kjkj 

kjkj θ σσσσ 

σσσσ C 

( ) ( )ii T 

ii ppCpp −−= − ~~~ 12χ ⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ = 

i 

i i b 

a p

Kalman filter: straight line example 

###  The measurement at i is the y position at zi: 

###  in this case the term                has the form: 

###  The new parameters are obtained by the minimization of: 

###  Which can be put in the general χ2 form:     

###  whose solution is:    

( )iii zzbay −+= 

mi − yi (pi ) = yi −Hipi = yi − ai 

( ) ( ) 2 

2 12 )(~~~ 

iy 

ii ii 

T ii 

ay σ 

χ − 

+−−= − ppCpp 

⇒ χ 2 = (yi − ai )2 

σ yi 2 

⎥ ⎥ ⎦ 

⎤ 

⎢ ⎢ ⎣ 

⎡ = 

⎥ ⎥ ⎥ 

⎦ 

⎤ 

⎢ ⎢ ⎢ 

⎣ 

⎡ 

= ⎟ ⎟ ⎟ 

⎠ 

⎞ 

⎜ ⎜ ⎜ 

⎝ 

⎛ 

=⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ = 2 

~ 

01 10 01 

~ ~ 

iy 

i 

i 

i 

i 

i 

i 

y b a 

b a 

σ0 0C 

VAYp 

( ) ( )ApYVApY −−= −12χ T 

p = ATWA( ) −1 ATWY Ci = A 

TWA( ) −1 

W =V−1 = Ci −1 0 

0 1 σ yi 2 

" 

# 

$ $ 

% 

& 

' ' 

mi − yi (pi ) mi = (yi ) yi (p j ) = Hipi Hi = 1 0( )

Kalman filter: straight line example 

###  Finally, going to the interaction point:  

##  Some important concepts: 

### –  Track parameters depend on the point at which we are looking at the track:  

###   p0≠pi≠pj 

### –  Even if at each point we are measuring yi≈ai, the 𝜒2 minimization also changes the other track parameter bi due to the correlations in Ci 

### –  This predictor-corrector method can be used to reject measurements which are not consistent with the extrapolation, for example defining requirements on the 𝜒2:   

zbay 00 += 

p0 = a0 b0 

⎛ 

⎝ ⎜ 

⎞ 

⎠ ⎟ = 

ai − bizi bi 

⎛ 

⎝ ⎜ 

⎞ 

⎠ ⎟ 

⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ 

− 

− +⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ 

−⎟⎟ ⎠ 

⎞ ⎜⎜ ⎝ 

⎛ − = 

11 01 

10 1 2 

2 ,0 

i 

ii ip 

i i 

i 

z zz 

z z 

θCC 

χ 2 = mi − yi ( !pi )( )T !Vi−1 mi − yi ( !pi )( ) ⇒ χ 2 = (yi − !ai )2 

σ yi 2 +σ ai 

2 

The first and second features are general characteristics of all track fitter 

Kalman filter: exercises 

##  Exercise 1 (needed for Geant4 practical exercises) 

### –  repeat the same computation for a parabolic trajectory –  In case multiple scattering can be neglected, compute the initial 

### parameters and their covariance matrix, using 3 measurement planes, spaced by a length l and with a measurement uncertainty σ 

##  Exercise 2 

### –  apply the Kalman filter method to a sequence of measurements yi, i=0...N 

### of a physics quantity a, each with its own uncertainty σi 

### –  show this method is equivalent to the weigthed mean 

##  Exercise 3 

### –  the best estimation of the parameters at a point i, pi, can be obtained 

### performing a forward Kalman filter (points from 1 to i) and a backward one (points from i to N). Indicating with  pf, Cf, pb, Cb, respectively, the parameters and their covariance matrices of these two fits, try to give an expression for pi and Ci.  

Global 𝜒2 fit 

###  Il Kalman filter is the common choice if many measurements 

###  In modern experiments often few, N=O(10), measurements with high resolution: –  inverting the correlation matrix is computationally 

### feasible –  minimization of a global χ2 including all 

### measurments at once 

###  It is interesting to see how multiple  

### scattering is taken into account. –  No multiple scattering: 

 N measurements 

 2 parameters 

 N-2 degrees of freedom 

### –  With multiple scattering 

 N additional parameters: scattering angles 

 N constraints: ⟨φms,k⟩=0 ⟨φ2 

ms,k⟩=θ2 ms,k 

 2N-(N+2) degrees of freedom 

y(z) = a + bz 

χ 2 = yk − a − bzk( )2 

σ k 2 

k=1,N ∑ 

y(z) = 

a + bz z ≤ z1 a + bz + bms,1(z − z1) z1 < z ≤ z2 a + bz + bms,1(z − z1) + bms,2 (z − z2 ) 

z2 < z ≤ z3 

! a + bz + bms,k (z − zk ) 

k=1,N ∑ z > zN 

⎧ 

⎨ 

⎪ ⎪ ⎪⎪ 

⎩ 

⎪ ⎪ ⎪ ⎪ 

bms,k = tanϕms,k 

χ 2 = yk − y(zk )( )2 

σ k 2 + 

ϕms,k 2 

θms,k 2 

k=1,N ∑ 

No Multiple scattering 

With Multiple scattering 

Vertex fit (trivial) 

###  Take a set of tracks fitted as straight lines:    

###  Assume they have been produced at a single point (xv,yv) 

###  Determine the point that minimizes: 

###  The problem is only apparently linear: the uncertainty on the distance depends from vertex position: 

### –  it is linear only when the uncertainty on direction can be neglected. 

0cossin,0 =+− iii yxd ϕϕ 

( ) 

### ∑ 

+− = tracks 

2 , 

2 ,02 cossin 

id 

ivivi yxd σ 

ϕϕ χ 

(xv,yv) 

σ d,i 2 = 1 −xv cosφi − yv sinφi( ) 

σ d0,i 2 σ d0,i ,φi 

σ d0,i ,φi σφi 

2 

" 

# 

$ $ $ 

% 

& 

' ' ' 

1 −xv cosφi − yv sinφi 

( 

) ** 

+ 

, --

x = d0,i sinϕi + scosϕi 

y = −d0,i cosϕi + ssinϕi 

" # $

Vertex fit 

###  The real model consists of Ntracks+2 parameters –  the 2 vertex coordinates: xv, yv 

### –  the Ntracks directions at the vertex: φv,i 

###  And there are 2Ntracks observables –  the trajectory parameters: d0,i, φi 

###  resulting in the more complex  

###  Fitting a vertex is not simply “adding” something to a set of tracks 

### –  also track properties are modified: 

###  the fact that all tracks come from a vertex actually constrains track parameters 

###  basically the vertex is an additional measured point in the track fit 

### –  it is important to be sure tracks originate from the same vertex 

###  iterative procedures removing tracks giving too high contributions to the 𝜒2 

###  sometimes further constraints can be added (for example invariant mass of tracks associated to the vertex) 

χ 2 = d0,i − xv sinφv,i + yv cosφv,i φ j −φv,i( ) σ d0,i 2 σ d0,i ,φ j 

σ d0,i ,φ j σφ j 2 

⎡ 

⎣ ⎢ ⎢ 

⎤ 

⎦ ⎥ ⎥ 

−1 d0,i − xv sinφv,i + yv cosφv,i 

φ j −φv,i 

⎛ 

⎝ ⎜ 

⎞ 

⎠ ⎟ 

tracks ∑ 

(xv,yv) 

Element of track finding (pattern recognition) 

###  Problem: –  we have many individual measurements –  which of them come from a particle? 

###  Local methods –  Start from seeds build out of a small set of points: 

###  enough to provide initial set of track parameters –  Use the track model to add points and form a track 

###  clearly not all seeds will become a track 

###  Examples: road method, kalman filter 

### –  Very flexible, but complexity may increases like N2-N3 

###  Global methods –  Process all hits at the same time 

###  Examples: histogramming method, pattern matching  –  Processing time scales better with N, but, for practical reason: 

###  acceptance in parameter space may be restricted 

###  not the whole tracker granularity can be exploited   

Seeding in ATLAS 

Dependence on particle density 

##  Method is sensitive to the detector occupancy (=pile-up) 

### –  increase of combinatorial background 

###  number of reconstructed tracks non linear with number of events: fake tracks 

###  can be reduces by tightening acceptance criteria 

### –  increase of needed CPU resources 

###  optimization/parallelization of reconstruction software 

Hough transform 

###  The Hough transform is a method widely used in image processing. 

###  It is basically a transform between  

### –  the coordinate space, in which mesurements are performed –  the parameter space space in which tracks are defined 

###  The track model  

###  Given a measured point 

### –  can be interpreted as a family of trajectories across this point 

ρ 

z z0 

cotθ 

z = z0 + ρ cotϑ 

ρ1 z1( ) cotϑ = 

z1 − z0 ρ1 

Coordinate space Parameter space 

“Linear” Hough transform 

##  The above parameterization cannot be directly applied to the tranverse 

### plane: –  it has a singularity for  

### 0/π rad angles –  there are three parameters 

###  Let’s consider two simplified cases: –  straight lines κ=0 

###  multiplying first equation for –sinφ0 and second for cosφ0: 

###  φ0 and d0 are better behaved parameters;  one measured point corresponds to a sinusoid in the parameter space. 

### –  particles coming from the interaction point d0=0: 

###  trajectory is:  

###  using conformal coordinates 

###  In conformal space circles become straight lines, intercept is the curvature 

x(s) = −d0 sinφ0 + ssinϑ cosφ0 + 1 2κs 

2 sin2ϑ sinφ0 y(s) = d0 cosφ0 + ssinϑ sinφ0 − 1 

2κs 2 sin2ϑ cosφ0 

z(s) = z0 + scosϑ 

−sinφ0x + ycosφ0 = d0 

x − Rsinφ0( )2 + y + Rcosφ0( )2 = R2 x2 + y2 − 2xRsinφ0 + 2yRcosφ0 = 0 

X = 2x / x2 + y2( ) Y = 2y / x2 + y2( ) 1 / R( ) − X sinφ0 +Y cosφ0 = 0

Histogramming and “retina” tracking 

###  Histogramming method: –  patition parameter space (p,q) in bins of the possible track parameteres –  fill each bin with  a “vote” for each measurement compatible with the 

### parameters –  look for majorities in the matrics. 

###  Retina tracking –  A refinement, inspirated by pattern recognition in the visual cortex. –  Define a set of neurons  

### excitated by shapes, –  interpolate around local 

### maxima.       maxima of excitation function. 

###                                                      (L. Ristori, NIM A453 (2000) 425)  

measure ment 

expectation from track model 

Pattern matching 

###  Predefine a set of predefined hit pattern corresponding to a sample of possible trajectories. 

###  Find if observed hit match one of the templates 

### –  Fast decision: can be used at trigger level –  Coarse granularity of patterns 

### Roads 

Examples of tracking systems: ATLAS 

##  Pixel Detector 

### –  4 barrel layers, 3+3 disks, 108 pixels –  barrel radii: 33, 50, 85, 122 mm –  pixel size 50×400 µm2 (50×250 IBL) –  σRΦ=6-10 µm, σz~66 µm 

##  SemiConductor Tracker 

### –  4 barrel layers,7+7 disks, 6×106 

### strips –  barrel radii: 30, 37, 44, 51 cm –  strip pitch 80 µm (40 mrad stereo) –  σRΦ=16 µm, σz=580 µm 

##  Transition Radiation Tracker 

### –  barrel 55<R<102 cm –  36 layers, 400000 drift tubes –  4 mm diameter –  σRΦ=170 µm 

Examples of tracking systems: ATLAS 

Examples of tracking systems: CMS 

###  Pixel Detector –  2 barrel layers, 2+2 disks, 107 pixels –  barrel radii: 41, 100 mm –  pixel size 100×150 µm2 –  σRΦ~10 µm, σz~10 µm 

###  Internal Silicon Strip Tracker –  4 barrel layers, many disks,  

### 2×106 strips –  barrel radii: 20-55 cm –  strip pitch 80-120 µm –  σRΦ~23-35 µm 

###  External Silicon Strip Tracker –  6 barrel layers, many disks,  

### 7×106 strips –  barrel radii: max 116 cm –  strip pitch 120-180 µm –  σRΦ~35-53 µm 

Examples of tracking systems: vertex detectors 

P. Wells, ERDIT 2011 

# Examples of tracking systems: momentum resolution 

ATLAS Muon system 

CMS 

BACKUP  

Multiple scattering 