Audit for filling the gap between the gsheets integration and the core stdlib.

This is an initial checklist  only and it's very likely that it will need changes based on feedback and guidance.

### Table of Contents

- [`api/math` Functions Checklist](#apimath-functions-checklist)
	- [Unary Functions](#unary-functions-200)
		- [Absolute Value & Basic Operations](#absolute-value--basic-operations-14)
		- [Trigonometric](#trigonometric-46)
		- [Hyperbolic](#hyperbolic-6)
		- [Coversed/Versed Trigonometric](#coversedversed-trigonometric-19)
		- [Rounding/Ceiling/Floor](#roundingceilingfloor-13)
		- [Logarithmic](#logarithmic-13)
		- [Gamma Functions](#gamma-functions-7)
		- [Special Functions](#special-functions-6)
		- [Factorial & Sequences](#factorial--sequences-19)
		- [Sign & Comparison](#sign--comparison-6)
		- [Conversions](#conversions-3)
		- [Extractions](#extractions-6)
		- [Multiple Return Values](#multiple-return-values-8)
		- [Kernel Functions](#kernel-functions-10)
	- [Binary Functions](#binary-functions-71)
		- [Arithmetic](#arithmetic-12)
		- [Sign Operations](#sign-operations-6)
		- [Min/Max(binary)](#minmaxbinary-16)
		- [Special Functions](#special-functions-10)
		- [Number Theory](#number-theory-6)
		- [Distance](#distance-2)
		- [Logarithmic](#logarithmic-4)
		- [Factorials](#factorials-2)
		- [Transforms](#transforms-4)
		- [Rounding to Base/Precision](#rounding-to-baseprecision-11)
	- [Other Functions](#other-functions-15)
		- [Variable Arguments](#variable-arguments-6)
		- [Ternary Functions (Three Arguments)](#ternary-functions-three-arguments-8)
		- [Four+ Arguments](#four-arguments-1)
		- [Complex Operations](#complex-operations-24)
- [`api/string` Functions Checklist](#apistring-functions-checklist46)
- [`api/stats` Functions Checklist](#apistats-functions-checklist47)
- [`api/datasets` Functions Checklist](#apidatasets-functions-checklist-56)
- [`api/blas` Functions Checklist](#apiblas-functions-checklist-57)
	- [Level 1](#level-1-33)
	- [Level 2](#level-2-21)
	- [Level 3](#level-3-3)
- [`api/array` Functions Checklist](#apiarray-functions-checklist)

---

# `api/math` Functions Checklist
Roughly ~286 APIs need to be exposed under this namespace to bring it on par with the main stdlib.
## Unary Functions [~200]

### Absolute Value & Basic Operations [14]
- [ ] abs2f
- [ ] absf
- [ ] absgammalnf
- [ ] cbrtf
- [ ] inv
- [ ] invf
- [ ] labs
- [ ] sqrtf
- [ ] sqrtpi
- [ ] sqrtpif
- [ ] rsqrt
- [ ] rsqrtf
- [ ] rcbrt
- [ ] rcbrtf

### Trigonometric [46]
- [ ] acosdf
- [ ] acosf
- [ ] acotdf
- [ ] acotf
- [ ] acscd
- [ ] acscdf
- [ ] acscf
- [ ] asec
- [ ] asecd
- [ ] asecdf
- [ ] asecf
- [ ] asind
- [ ] asindf
- [ ] asinf
- [ ] atand
- [ ] atandf
- [ ] atanf
- [ ] cosd
- [ ] cosdf
- [ ] cosf
- [ ] cosm1f
- [ ] cospif
- [ ] cotd
- [ ] cotdf
- [ ] cotf
- [ ] csc
- [ ] cscd
- [ ] cscdf
- [ ] cscf
- [ ] sec
- [ ] secd
- [ ] secdf
- [ ] secf
- [ ] sinc
- [ ] sincf
- [ ] sind
- [ ] sindf
- [ ] sinf
- [ ] sinh
- [ ] sinpi
- [ ] sinpif
- [ ] tan
- [ ] tand
- [ ] tandf
- [ ] tanf
- [ ] tanh

### Hyperbolic [6]
- [ ] acoth
- [ ] asech
- [ ] asinhf
- [ ] atanhf
- [ ] csch
- [ ] sech

### Coversed/Versed Trigonometric [19]
- [ ] acovercosf
- [ ] acoversinf
- [ ] ahaversin
- [ ] avercosf
- [ ] aversinf
- [ ] covercosf
- [ ] coversinf
- [ ] hacovercos
- [ ] hacovercosf
- [ ] hacoversin
- [ ] hacoversinf
- [ ] havercos
- [ ] havercosf
- [ ] haversin
- [ ] haversinf
- [ ] vercos
- [ ] vercosf
- [ ] versin
- [ ] versinf

### Rounding/Ceiling/Floor [13]
- [ ] floor
- [ ] floor10
- [ ] floor2
- [ ] floorf
- [ ] round
- [ ] round10
- [ ] round2
- [ ] roundf
- [ ] round-nearest-even
- [ ] trunc
- [ ] trunc10
- [ ] trunc2
- [ ] truncf



### Logarithmic [13]
- [ ] ln
- [ ] lnf
- [ ] log
- [ ] log10
- [ ] log1mexp
- [ ] log1p
- [ ] log1pexp
- [ ] log1pf
- [ ] log1pmx
- [ ] log2
- [ ] logf
- [ ] logit
- [ ] logitf

### Gamma Functions [7]
- [ ] gamma
- [ ] gamma1pm1
- [ ] gammaln
- [ ] gammasgn
- [ ] gammasgnf
- [ ] trigamma
- [ ] trigammaf

### Special Functions [6]
- [ ] bernoullif
- [ ] erfcx
- [ ] spence
- [ ] spencef
- [ ] dirac-delta
- [ ] dirac-deltaf

### Factorial & Sequences [19]
- [ ] factorial
- [ ] factorial2
- [ ] factorial2f
- [ ] factorialln
- [ ] factoriallnf
- [ ] fibonacci
- [ ] fibonaccif
- [ ] fibonacci-index
- [ ] fibonacci-indexf
- [ ] lucas
- [ ] lucasf
- [ ] negafibonacci
- [ ] negafibonaccif
- [ ] negalucas
- [ ] negalucasf
- [ ] tribonacci
- [ ] tribonaccif
- [ ] nonfibonacci
- [ ] nonfibonaccif

### Sign & Comparison [6]
- [ ] signum
- [ ] signumf
- [ ] heaviside
- [ ] heavisidef
- [ ] ramp
- [ ] rampf

### Conversions [3]
- [ ] deg2radf
- [ ] rad2deg
- [ ] rad2degf

### Extractions [6]
- [ ] frexp
- [ ] frexpf
- [ ] modf
- [ ] modff
- [ ] rempio2
- [ ] rempio2f

### Multiple Return Values [8] 
_(existing scaffolding does not support multiple return values, implementation needed)_
- [ ] sincos
- [ ] sincosd
- [ ] sincosf
- [ ] sincospi
- [ ] fresnel
- [ ] fresnelc
- [ ] fresnels
- [ ] sici

### Kernel Functions [10]
_(not for a normal user but will be helpful for some professional groups that rely on these kernalised verison for accuracy)_
- [ ] kernel-cos
- [ ] kernel-cosf
- [ ] kernel-log1p
- [ ] kernel-log1pf
- [ ] kernel-sin
- [ ] kernel-sincos
- [ ] kernel-sincosf
- [ ] kernel-sinf
- [ ] kernel-tan
- [ ] kernel-tanf


## Binary Functions [~71]

### Arithmetic [12]
- [ ] atan2
- [ ] atan2d
- [ ] atan2f
- [ ] fmod
- [ ] fmodf
- [ ] pow
- [ ] powf
- [ ] powm1
- [ ] pdiff
- [ ] pdifff
- [ ] ldexp
- [ ] ldexpf

### Sign Operations [6]
- [ ] copysign
- [ ] copysignf
- [ ] flipsign
- [ ] flipsignf
- [ ] cflipsign
- [ ] cflipsignf

### Min/Max(binary) [16]
- [ ] max
- [ ] maxabs
- [ ] maxabsf
- [ ] maxf
- [ ] min
- [ ] minabs
- [ ] minabsf
- [ ] minf
- [ ] minmax
- [ ] minmaxabs
- [ ] minmaxabsf
- [ ] minmaxf
- [ ] nanmax
- [ ] nanmaxf
- [ ] nanmin
- [ ] nanminf

### Special Functions [10]
- [ ] beta
- [ ] betaln
- [ ] binomcoef
- [ ] binomcoeff
- [ ] binomcoefln
- [ ] gamma-delta-ratio
- [ ] gammainc
- [ ] gammaincinv
- [ ] ellipj
- [ ] polygamma

### Number Theory [6]
- [ ] gcd
- [ ] gcdf
- [ ] lcm
- [ ] lcmf
- [ ] kronecker-delta
- [ ] kronecker-deltaf

### Distance [2]
- [ ] hypot
- [ ] hypotf

### Logarithmic [4]
- [ ] logaddexp
- [ ] xlog1py
- [ ] xlogy
- [ ] xlogyf

### Factorials [2]
- [ ] falling-factorial
- [ ] rising-factorial

### Transforms [4]
- [ ] boxcox
- [ ] boxcox1p
- [ ] boxcox1pinv
- [ ] boxcoxinv

### Rounding to Base/Precision [11]
- [ ] ceilb
- [ ] ceiln
- [ ] ceilsd
- [ ] floorb
- [ ] roundb
- [ ] roundn
- [ ] roundnf
- [ ] roundsd
- [ ] truncb
- [ ] truncn
- [ ] truncsd

---

## Other Functions [~15]
_(I'll need to tweak with the scaffolding to generate files for these individually as number of arguments are varied)_
### Variable Arguments [6]
- [ ] maxabsn
- [ ] maxn
- [ ] minabsn
- [ ] minmaxabsn
- [ ] minmaxn
- [ ] minn

### Ternary Functions (Three Arguments) [8]
_scaffolding scripts need to be made for this_
- [ ] betainc
- [ ] betaincinv
- [ ] clamp
- [ ] clampf
- [ ] kernel-betainc
- [ ] kernel-betaincinv
- [ ] wrap
- [ ] wrapf

### Four+ Arguments [1]
- [ ] hyp2f1

### Complex Operations [24]
_these are a part of the `@stdlib/math/base/special` will need the `@stdlib/complex` namespace implementation to add to the gsheets_
- [ ] cabs
- [ ] cabs2
- [ ] cabs2f
- [ ] cabsf
- [ ] ccis
- [ ] cexp
- [ ] cinv
- [ ] cinvf
- [ ] cphase
- [ ] cphasef
- [ ] cpolar
- [ ] cpolarf
- [ ] csignum
- [ ] csignumf
- [ ] cceil
- [ ] cceilf
- [ ] cceiln
- [ ] ceilf
- [ ] cfloor
- [ ] cfloorf
- [ ] cfloorn
- [ ] cround
- [ ] croundf
- [ ] croundn

# `api/string` Functions Checklist[46]

- [ ] acronym
- [ ] code-point-at
- [ ] dotcase
- [ ] ends-with
- [ ] first
- [ ] for-each
- [ ] format
- [ ] from-code-point
- [ ] headercase
- [ ] last
- [ ] left-pad
- [ ] left-trim
- [ ] left-trim-n
- [ ] next-code-point-index
- [ ] next-grapheme-cluster-break
- [ ] num2words
- [ ] num-code-points
- [ ] num-grapheme-clusters
- [ ] pad
- [ ] percent-encode
- [ ] prev-grapheme-cluster-break
- [ ] remove-first
- [ ] remove-last
- [ ] remove-punctuation
- [ ] remove-utf8-bom
- [ ] remove-words
- [ ] repeat
- [ ] replace
- [ ] replace-before
- [ ] reverse
- [ ] right-pad
- [ ] right-trim
- [ ] right-trim-n
- [ ] split-grapheme-clusters
- [ ] starts-with
- [ ] substring-after
- [ ] substring-after-last
- [ ] substring-before
- [ ] substring-before-last
- [ ] to-grapheme-cluster-iterator
- [ ] to-grapheme-cluster-iterator-right
- [ ] to-well-formed
- [ ] trim
- [ ] truncate
- [ ] truncate-middle
- [ ] utf16-to-utf8-array

# `api/stats` Functions Checklist[47]

- [ ] anova1
- [ ] binomial-test
- [ ] chi2gof
- [ ] chi2test
- [ ] cumin
- [ ] fligner-test
- [ ] incr
- [ ] iter
- [ ] kde2d
- [ ] kruskal-test
- [ ] kstest
- [ ] levene-test
- [ ] lowess
- [ ] maxsorted
- [ ] mean
- [ ] meankbn
- [ ] meankbn2
- [ ] meanors
- [ ] meanpn
- [ ] meanpw
- [ ] meanwd
- [ ] mediansorted
- [ ] midrange
- [ ] min
- [ ] minabs
- [ ] minsorted
- [ ] nanmax
- [ ] nanmaxabs
- [ ] nanmean
- [ ] nanmeanors
- [ ] nanmeanpn
- [ ] nanmeanwd
- [ ] nanmin
- [ ] nanminabs
- [ ] nanrange
- [ ] padjust
- [ ] pcorrtest
- [ ] range
- [ ] ranks
- [ ] strided
- [ ] test
- [ ] ttest
- [ ] ttest2
- [ ] vartest
- [ ] wilcoxon
- [ ] ztest
- [ ] ztest2


# `api/datasets` Functions Checklist [56]

- [ ] afinn-111
- [ ] afinn-96
- [ ] berndt-cps-wages-1985
- [ ] cdc-nchs-us-births-1969-1988
- [ ] cdc-nchs-us-births-1994-2003
- [ ] cdc-nchs-us-infant-mortality-bw-1915-2013
- [ ] cmudict
- [ ] dale-chall-new
- [ ] emoji
- [ ] emoji-code-picto
- [ ] emoji-picto-code
- [ ] female-first-names-en
- [ ] fivethirtyeight-ffq
- [ ] frb-sf-wage-rigidity
- [ ] harrison-boston-house-prices
- [ ] harrison-boston-house-prices-corrected
- [ ] herndon-venus-semidiameters
- [ ] img-acanthus-mollis
- [ ] img-airplane-from-above
- [ ] img-allium-oreophilum
- [ ] img-black-canyon
- [ ] img-dust-bowl-home
- [ ] img-french-alpine-landscape
- [ ] img-locomotion-house-cat
- [ ] img-locomotion-nude-male
- [ ] img-march-pastoral
- [ ] img-nagasaki-boats
- [ ] liu-negative-opinion-words-en
- [ ] liu-positive-opinion-words-en
- [ ] male-first-names-en
- [ ] minard-napoleons-march
- [ ] moby-dick
- [ ] month-names-en
- [ ] nightingales-rose
- [ ] pace-boston-house-prices
- [ ] primes-100k
- [ ] savoy-stopwords-fin
- [ ] savoy-stopwords-fr
- [ ] savoy-stopwords-ger
- [ ] savoy-stopwords-it
- [ ] savoy-stopwords-por
- [ ] savoy-stopwords-sp
- [ ] savoy-stopwords-swe
- [ ] sotu
- [ ] spache-revised
- [ ] spam-assassin
- [ ] ssa-us-births-2000-2014
- [ ] standard-card-deck
- [ ] stopwords-en
- [ ] suthaharan-multi-hop-sensor-network
- [ ] suthaharan-single-hop-sensor-network
- [ ] us-states-abbr
- [ ] us-states-capitals
- [ ] us-states-capitals-names
- [ ] us-states-names
- [ ] us-states-names-capitals

# `api/blas` Functions Checklist [57]
### Level 1 [33]
- [ ] dasum
- [ ] dcopy
- [ ] ddot
- [ ] dnrm2
- [ ] drot
- [ ] drotg
- [ ] drotm
- [ ] dscal
- [ ] dsdot
- [ ] dswap
- [ ] dznrm2
- [ ] gasum
- [ ] gaxpy
- [ ] gcopy
- [ ] gdot
- [ ] gnrm2
- [ ] gscal
- [ ] gswap
- [ ] idamax
- [ ] igamax
- [ ] isamax
- [ ] sasum
- [ ] scasum
- [ ] scnrm2
- [ ] scopy
- [ ] sdot
- [ ] sdsdot
- [ ] snrm2
- [ ] srot
- [ ] srotg
- [ ] srotm
- [ ] sscal
- [ ] sswap

### Level 2 [21]
- [ ] dgemv
- [ ] dger
- [ ] dspmv
- [ ] dspr
- [ ] dsymv
- [ ] dsyr
- [ ] dsyr2
- [ ] dtrmv
- [ ] dtrsv
- [ ] ggemv
- [ ] gger
- [ ] gsyr
- [ ] sgemv
- [ ] sger
- [ ] sspmv
- [ ] sspr
- [ ] ssymv
- [ ] ssyr
- [ ] ssyr2
- [ ] strmv
- [ ] strsv

### Level 3 [3]
- [ ] dgemm
- [ ] ggemm
- [ ] sgemm
---
> _The complex BLAS functions need the complex numbers infrastructure in the integration repo, hence not included in the audit_

# `api/array` Functions Checklist

> _still under process as I ran into some confusions_
