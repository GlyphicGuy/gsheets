Audit for filling the gap between the gsheets integration and the core stdlib.

This is an initial checklist  only and it's very likely that it will need changes based on feedback and guidance.

### Table of Contents

- [`api/math` Functions Checklist](#apimath-functions-checklist)
	- [Unary Functions](#unary-functions-85)
		- [Absolute Value & Basic Operations](#absolute-value--basic-operations-5)
		- [Trigonometric](#trigonometric-19)
		- [Hyperbolic](#hyperbolic-4)
		- [Coversed/Versed Trigonometric](#coversedversed-trigonometric-7)
		- [Rounding/Ceiling/Floor](#roundingceilingfloor-10)
		- [Logarithmic](#logarithmic-9)
		- [Gamma Functions](#gamma-functions-5)
		- [Special Functions](#special-functions-3)
		- [Factorial & Sequences](#factorial--sequences-10)
		- [Sign & Comparison](#sign--comparison-3)
		- [Conversions](#conversions-1)
		- [Extractions](#extractions-2)
		- [Multiple Return Values](#multiple-return-values-7)
	- [Binary Functions](#binary-functions-49)
		- [Arithmetic](#arithmetic-6)
		- [Sign Operations](#sign-operations-3)
		- [Min/Max(binary)](#minmaxbinary-8)
		- [Special Functions](#special-functions-9)
		- [Number Theory](#number-theory-3)
		- [Distance](#distance-1)
		- [Logarithmic](#logarithmic-3)
		- [Factorials](#factorials-2)
		- [Transforms](#transforms-4)
		- [Rounding to Base/Precision](#rounding-to-baseprecision-10)
	- [Other Functions](#other-functions-27)
		- [Variable Arguments](#variable-arguments-6)
		- [Ternary Functions (Three Arguments)](#ternary-functions-three-arguments-6)
		- [Four+ Arguments](#four-arguments-1)
		- [Complex Operations](#complex-operations-14)
- [`api/string` Functions Checklist](#apistring-functions-checklist-46)
- [`api/stats` Functions Checklist](#apistats-functions-checklist-47)
- [`api/datasets` Functions Checklist](#apidatasets-functions-checklist-43)
- [`api/blas` Functions Checklist](#apiblas-functions-checklist-57)
	- [Level 1](#level-1-33)
	- [Level 2](#level-2-21)
	- [Level 3](#level-3-3)
- [`api/array` Functions Checklist](#apiarray-functions-checklist)

---

# `api/math` Functions Checklist
Roughly ~286 APIs need to be exposed under this namespace to bring it on par with the main stdlib.
## Unary Functions [85]

### Absolute Value & Basic Operations [5]
- [ ] inv
- [ ] labs
- [ ] sqrtpi
- [ ] rsqrt
- [ ] rcbrt

### Trigonometric [19]
- [ ] acscd
- [ ] asec
- [ ] asecd
- [ ] asind
- [ ] atand
- [ ] cosd
- [ ] cotd
- [ ] csc
- [ ] cscd
- [ ] sec
- [ ] secd
- [ ] sinc
- [ ] sind
- [ ] sinh
- [ ] sinpi
- [ ] tan
- [ ] tand
- [ ] tanf
- [ ] tanh

### Hyperbolic [4]
- [ ] acoth
- [ ] asech
- [ ] csch
- [ ] sech

### Coversed/Versed Trigonometric [7]
- [ ] ahaversin
- [ ] hacovercos
- [ ] hacoversin
- [ ] havercos
- [ ] haversin
- [ ] vercos
- [ ] versin

### Rounding/Ceiling/Floor [10]
- [ ] floor
- [ ] floor10
- [ ] floor2
- [ ] round
- [ ] round10
- [ ] round2
- [ ] round-nearest-even
- [ ] trunc
- [ ] trunc10
- [ ] trunc2

### Logarithmic [9]
- [ ] ln
- [ ] log
- [ ] log10
- [ ] log1mexp
- [ ] log1p
- [ ] log1pexp
- [ ] log1pmx
- [ ] log2
- [ ] logit

### Gamma Functions [5]
- [ ] gamma
- [ ] gamma1pm1
- [ ] gammaln
- [ ] gammasgn
- [ ] trigamma

### Special Functions [3]
- [ ] erfcx
- [ ] spence
- [ ] dirac-delta

### Factorial & Sequences [10]
- [ ] factorial
- [ ] factorial2
- [ ] factorialln
- [ ] fibonacci
- [ ] fibonacci-index
- [ ] lucas
- [ ] negafibonacci
- [ ] negalucas
- [ ] tribonacci
- [ ] nonfibonacci

### Sign & Comparison [3]
- [ ] signum
- [ ] heaviside
- [ ] ramp

### Conversions [1]
- [ ] rad2deg

### Extractions [2]
- [ ] frexp
- [ ] rempio2

### Multiple Return Values [7] 
_(existing scaffolding does not support multiple return values, implementation needed)_
- [ ] sincos
- [ ] sincosd
- [ ] sincospi
- [ ] fresnel
- [ ] fresnelc
- [ ] fresnels
- [ ] sici


## Binary Functions [49]

### Arithmetic [6]
- [ ] atan2
- [ ] atan2d
- [ ] fmod
- [ ] pow
- [ ] powm1
- [ ] ldexp

### Sign Operations [3]
- [ ] copysign
- [ ] flipsign
- [ ] cflipsign

### Min/Max(binary) [8]
- [ ] max
- [ ] maxabs
- [ ] min
- [ ] minabs
- [ ] minmax
- [ ] minmaxabs
- [ ] nanmax
- [ ] nanmin

### Special Functions [9]
- [ ] beta
- [ ] betaln
- [ ] binomcoef
- [ ] binomcoefln
- [ ] gamma-delta-ratio
- [ ] gammainc
- [ ] gammaincinv
- [ ] ellipj
- [ ] polygamma

### Number Theory [3]
- [ ] gcd
- [ ] lcm
- [ ] kronecker-delta

### Distance [1]
- [ ] hypot

### Logarithmic [3]
- [ ] logaddexp
- [ ] xlog1py
- [ ] xlogy

### Factorials [2]
- [ ] falling-factorial
- [ ] rising-factorial

### Transforms [4]
- [ ] boxcox
- [ ] boxcox1p
- [ ] boxcox1pinv
- [ ] boxcoxinv

### Rounding to Base/Precision [10]
- [ ] ceilb
- [ ] ceiln
- [ ] ceilsd
- [ ] floorb
- [ ] roundb
- [ ] roundn
- [ ] roundsd
- [ ] truncb
- [ ] truncn
- [ ] truncsd

---

## Other Functions [27]
_(I'll need to tweak with the scaffolding to generate files for these individually as number of arguments are varied)_
### Variable Arguments [6]
- [ ] maxabsn
- [ ] maxn
- [ ] minabsn
- [ ] minmaxabsn
- [ ] minmaxn
- [ ] minn

### Ternary Functions (Three Arguments) [6]
_scaffolding scripts need to be made for this_
- [ ] betainc
- [ ] betaincinv
- [ ] clamp
- [ ] kernel-betainc
- [ ] kernel-betaincinv
- [ ] wrap

### Four+ Arguments [1]
- [ ] hyp2f1

### Complex Operations [14]
_these are a part of the `@stdlib/math/base/special` will need the `@stdlib/complex` namespace implementation to add to the gsheets_
- [ ] cabs
- [ ] cabs2
- [ ] ccis
- [ ] cexp
- [ ] cinv
- [ ] cphase
- [ ] cpolar
- [ ] csignum
- [ ] cceil
- [ ] cceiln
- [ ] cfloor
- [ ] cfloorn
- [ ] cround
- [ ] croundn

# `api/string` Functions Checklist [46]

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

# `api/stats` Functions Checklist [47]

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


# `api/datasets` Functions Checklist [43]

- [ ] afinn-111
- [ ] afinn-96
- [ ] berndt-cps-wages-1985
- [ ] cdc-nchs-us-births-1969-1988
- [ ] cdc-nchs-us-births-1994-2003
- [ ] cdc-nchs-us-infant-mortality-bw-1915-2013
- [ ] cmudict
- [ ] dale-chall-new
- [ ] female-first-names-en
- [ ] fivethirtyeight-ffq
- [ ] frb-sf-wage-rigidity
- [ ] harrison-boston-house-prices
- [ ] harrison-boston-house-prices-corrected
- [ ] herndon-venus-semidiameters
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
_This list is still under iterations and will be categorised into directories like `brodcasted`, `accessor`,etc.


- [ ] accessor
- [ ] accessor-getter
- [ ] accessors
- [ ] accessor-setter
- [ ] any
- [ ] any-has-own-property
- [ ] any-has-property
- [ ] any-is-entry
- [ ] any-is-entry-in
- [ ] arraylike2object
- [ ] at
- [ ] at2d
- [ ] at3d
- [ ] at4d
- [ ] at5d
- [ ] atnd
- [ ] banded
- [ ] bifurcate-entries
- [ ] bifurcate-indices
- [ ] bifurcate-values
- [ ] binary2d
- [ ] binary3d
- [ ] binary4d
- [ ] binary5d
- [ ] binarynd
- [ ] broadcast-array
- [ ] broadcasted-binary2d
- [ ] broadcasted-binary3d
- [ ] broadcasted-binary4d
- [ ] broadcasted-binary5d
- [ ] broadcasted-quaternary2d
- [ ] broadcasted-quaternary3d
- [ ] broadcasted-quaternary4d
- [ ] broadcasted-quaternary5d
- [ ] broadcasted-quinary2d
- [ ] broadcasted-quinary4d
- [ ] broadcasted-ternary2d
- [ ] broadcasted-ternary3d
- [ ] broadcasted-ternary4d
- [ ] broadcasted-ternary5d
- [ ] broadcasted-unary2d
- [ ] broadcasted-unary3d
- [ ] broadcasted-unary4d
- [ ] broadcasted-unary5d
- [ ] cartesian-power
- [ ] cartesian-product
- [ ] cartesian-square
- [ ] copy
- [ ] copy-indexed
- [ ] count-falsy
- [ ] count-if
- [ ] count-ifs
- [ ] count-same-value
- [ ] count-same-value-zero
- [ ] count-truthy
- [ ] cuany
- [ ] cuevery
- [ ] cunone
- [ ] cusome
- [ ] dedupe
- [ ] entries2objects
- [ ] entries2views
- [ ] every
- [ ] fancy-slice
- [ ] fancy-slice-assign
- [ ] fill
- [ ] filled
- [ ] filled2d
- [ ] filled3d
- [ ] filled4d
- [ ] filled5d
- [ ] fillednd
- [ ] filter
- [ ] first
- [ ] flatten
- [ ] flatten2d
- [ ] flatten3d
- [ ] flatten4d
- [ ] flatten5d
- [ ] fliplr2d
- [ ] fliplr3d
- [ ] fliplr4d
- [ ] fliplr5d
- [ ] flipud2d
- [ ] flipud3d
- [ ] flipud4d
- [ ] flipud5d
- [ ] for-each
- [ ] from-strided
- [ ] getter
- [ ] group-entries
- [ ] group-indices
- [ ] group-values
- [ ] group-values-on-key
- [ ] incrspace
- [ ] index-of
- [ ] index-of-same-value
- [ ] indices-complement
- [ ] insert-at
- [ ] join
- [ ] last
- [ ] last-index-of
- [ ] last-index-of-same-value
- [ ] linspace
- [ ] linspace2d
- [ ] logspace
- [ ] map
- [ ] map2d
- [ ] map3d
- [ ] map4d
- [ ] map5d
- [ ] min-signed-integer-dtypey
- [ ] min-unsigned-integer-dtype
- [ ] mskbinary2d
- [ ] mskbinary3d
- [ ] mskbinary4d
- [ ] mskbinary5d
- [ ] mskfilter
- [ ] mskfilter2
- [ ] mskfilter-map
- [ ] mskfiltern
- [ ] mskput
- [ ] mskreject
- [ ] mskreject-map
- [ ] mskunary2d
- [ ] mskunary3d
- [ ] mskunary4d
- [ ] mskunary5d
- [ ] n-cartesian-product
- [ ] nested2objects
- [ ] nested2views
- [ ] none
- [ ] nulls
- [ ] ones
- [ ] ones2d
- [ ] ones3d
- [ ] ones4d
- [ ] ones5d
- [ ] onesnd
- [ ] one-to
- [ ] place
- [ ] put
- [ ] quaternary2d
- [ ] quaternary3d
- [ ] quaternary4d
- [ ] quaternary5d
- [ ] quinary2d
- [ ] quinary3d
- [ ] quinary4d
- [ ] quinary5d
- [ ] reject
- [ ] rekey
- [ ] rekey-views
- [ ] remove-at
- [ ] reshape
- [ ] resolve-getter
- [ ] resolve-setter
- [ ] reverse
- [ ] scattered
- [ ] scatter-filled
- [ ] setter
- [ ] slice
- [ ] strided2array2d
- [ ] strided2array3d
- [ ] strided2array4d
- [ ] strided2array5d
- [ ] symmetric
- [ ] symmetric-banded
- [ ] take
- [ ] take2d
- [ ] take3d
- [ ] take-indexed
- [ ] take-indexed2
- [ ] take-map
- [ ] ternary2d
- [ ] ternary3d
- [ ] ternary4d
- [ ] ternary5d
- [ ] to-accessor-array
- [ ] to-deduped
- [ ] to-inserted-at
- [ ] to-reversed
- [ ] unary2d
- [ ] unary3d
- [ ] unary4d
- [ ] unary5d
- [ ] unarynd
- [ ] unitspace
- [ ] where
- [ ] with
- [ ] without
- [ ] zeros
- [ ] zeros2d
- [ ] zeros3d
- [ ] zeros4d
- [ ] zeros5d
- [ ] zerosnd
- [ ] zero-to


