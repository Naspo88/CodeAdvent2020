import { solvePart1, solvePart2 } from './Day9';

const realText = `17
14
2
35
39
31
5
25
1
29
40
48
9
37
21
7
41
8
15
28
47
13
16
50
45
30
11
3
33
78
4
69
5
58
17
19
10
12
9
25
18
7
14
8
55
21
15
22
13
16
70
20
11
23
29
24
26
27
69
28
17
19
30
43
48
25
33
31
32
41
39
35
40
34
66
36
37
49
52
42
44
45
46
47
85
51
56
72
57
73
67
63
69
104
76
70
84
71
107
82
78
79
90
86
149
110
200
93
98
108
113
119
120
124
130
132
161
139
210
141
148
170
278
186
172
157
165
184
179
191
201
206
212
340
221
232
267
289
254
401
271
280
287
298
377
322
327
329
363
336
468
344
370
380
392
407
556
433
453
488
521
534
525
541
760
551
567
627
958
663
649
838
743
904
680
714
1055
984
772
1231
1248
1756
886
941
1009
1046
1059
1118
1294
1178
1265
1194
1276
1377
2383
1827
1689
1394
1726
1452
1486
1658
1925
2162
1895
2164
2000
1932
2055
2068
2105
2177
2296
3194
3993
2459
2470
2653
2880
3381
3178
3110
2846
4836
4105
3144
3553
3925
3950
3827
3932
3987
4000
4123
4564
4282
4473
5176
4929
5112
9948
5123
5499
5956
5990
7060
6254
6673
7426
6697
11430
7777
7759
7814
7827
7932
7987
8123
8405
8755
10536
9402
10041
10919
13977
10622
12183
11455
17386
29569
12927
12951
14450
15900
14456
15573
15591
24655
15641
15759
15919
16110
24993
17160
25078
25134
23858
29618
21541
41024
27096
30350
24382
25878
27377
31491
27401
28906
30029
30047
31164
31232
31400
45016
46778
41018
46139
56228
44256
45399
45923
47419
86040
48637
50260
51478
51759
53288
54784
57406
57448
76180
58935
60076
95276
62396
137518
72418
85274
94197
86417
104332
92818
96056
91322
93342
155738
98897
100115
213144
103237
105047
164408
112190
114854
116383
169522
145350
157692
185519
134814
228156
158835
187378
206387
214969
184140
197865
184664
193457
192239
262739
205162
203352
281712
296854
217237
227044
228573
249668
251197
280164
415102
371518
318954
413237
342975
343499
390730
376379
500206
368804
376903
397401
443125
420812
408514
507208
753282
695857
570543
444281
626571
592643
500865
693401
599118
661929
814643
662453
712303
852795
788131
797715
745183
745707
777318
887406
1174719
1308218
909379
1101915
1458010
1773837
945146
1407636
1036924
1099983
1093508
1162794
1782631
1344301
1920426
1374756
1630113
1457486
1543422
2345142
1522501
1690853
1523025
1987389
1796785
2494410
2936631
1854525
1982070
2038654
3545378
2199718
2130432
2136907
2193491
5236231
3144864
2719057
2801787
3213354
4016911
2979987
4409910
3045526
3213878
3653457
3510414
3319810
8889688
4232145
3836595
3893179
11089406
4020724
4169086
4267339
4323923
4330398
5703905
7551955
5520844
6739781
5699044
7230789
6259404
12906599
8499484
6365336
10576376
9788183
10022967
6830224
7340534
8068740
7729774
8062265
16097220
8189810
8288063
13970570
16282371
9851242
11670932
11219888
11780248
16275420
11958448
13089628
13195560
12624740
13705870
16689294
10884537
23758753
14892489
20148258
14170758
22555469
24309516
15792039
16252075
16477873
18139305
26330610
23046802
20735779
21071130
22104425
37217560
23509277
22842985
23974165
24080097
38651242
30183743
59387021
55356865
35963619
35940297
38144923
36863169
33931344
32044114
32269912
36987854
39761352
68834985
99148373
41806909
44117932
42840204
80458151
44947410
46352262
75008092
46817150
62119088
78049276
62227857
62453655
65975458
78803823
64314026
66201256
103189110
108596337
69031968
126433114
94497769
76749206
81568261
84647113
87787614
115849118
86958136
89192466
108471350
91299672
93169412
108936238
109045007
128320344
124681512
126541883
126767681
163529737
169355875
141063232
135233224
257143489
211080227
235478121
351327239
158317467
201640762
166215374
171605249
174745750
304592969
176150602
180492138
184469084
360619686
202105650
255088025
276296456
251223395
447901705
295897758
555816364
307278606
325532316
293550691
301448598
324532841
476389896
333063217
531384481
338809605
364961222
337820623
346350999
870194086
702989730
620049247
386574734
435692479
457193675
589044018
772434546
657596058
749350303
680125425
589448449
594999289
600829297
988578156
639901690
625981439
724395357
670883840
671872822
676630228
702781845
684171622
927269072
1160087836
1909438139
822267213
976023183
843768409
1279460888
1660194805
1265883129
1297854261
1234900979
1184447738
1190277746
1195828586
2162170051
1316531918
1296865279
1355055462
1302611667
1342756662
1836718064
1979241895
1981036901
2533034408
1506438835
2589956441
2487143025
2500784108
1666035622
1819791592
2028216147
2450330867
2374725484
2386106332
2482301999
2419348717
2380276324
2849195497
4165727415
2599476946
3647072523
4319020063
2645368329
2809050502
3370972809
3172474457
3960278796
7491494520
3848007739
4105915781
3485827214
5336338522
6914966283
3694251769
4194517076
4402941631
4755001808
4979753270
7360029594
6027348847
4799625041
5025644653
5494563826
5244845275
5408527448
7048309960
5454418831
6016341138
6543447266
6658301671
8363220427
7180078983
7333834953
7591742995
7888768845
10400793497
8097193400
14250044666
8597458707
9439362351
10224598545
10254043872
9779378311
14513913936
9825269694
11041985791
10270489928
10653372723
16286831066
17862232923
11470759969
14051877538
12559788404
14640640666
13838380654
14771821978
14925577948
24914707433
15480511840
15985962245
16694652107
17536555751
18036821058
18376837018
19218740662
25167286659
23213161127
22830278332
20095759622
26242581947
43291544451
29007315720
22124132692
24030548373
25309140623
25522637507
59277506696
30757784223
28479021320
29697399926
32175163947
38693672967
31466474085
33857348858
42937234054
34231207858
35573376809
50552000965
37595577680
55249897667
42219892314
50831778130
42926037954
54001658827
59753845365
54316456343
67700988687
46154681065
49339688996
53788161943
81630907021
113065668639
58176421246
62336370178
61163874011
63641638032
65323822943
97253690397
68088556716
89091915119
90823274476
73168954489
108249860897
79815469994
85145930268
104089911965
89080719019
133412379659
95494370061
100471137408
107318555076
99942843008
126957116432
103127850939
125978008210
154799861510
119340295257
120512791424
124805512043
207789692484
128965460975
138492777432
189235842233
223638707700
152984424483
170638744470
158314884757
164961400262
245811332508
200413980416
277957299546
184575089080
195437213069
314777508326
225276649451
232124067119
203070693947
446225312924
245318303467
257833072689
315950004493
239853086681
249478252399
253770973018
448596044016
267458238407
291477201915
323276285019
311299309240
358728865173
440267067097
342889973837
360398613331
428347343398
380012302149
435194761066
387645783027
440755516536
448388997414
442923780628
693027833755
627856851738
485171390148
489331339080
511604045707
493624059699
531330288596
503249225417
521229211425
558935440322
578757547647
602776511155
634575594259
654189283077
722902275986
1053426447086
703288587168
748044396358
1006400601573
767658085176
822840544093
828401299563
1681283298824
891312778042
928095170776
988420615565
974502729228
978795449847
1005228105406
996873285116
1034579514013
1024478436842
1124005722580
1099986759072
1137692987969
1232946830724
1237352105414
1288764877336
1421847368253
2165447276190
1515702481534
1801635993940
1570884940451
2124259608766
1902597900004
1651241843656
2234225390530
1819407948818
2009082243241
1916515786341
1953298179075
1971376014344
2158585236593
2002101390522
2021351721958
2059057950855
2332933589796
2223992481652
3109069002313
2375045093383
4167548666712
2526116982750
2710612245589
2937549849787
4508434790238
4035861384470
3372520934391
3473482840455
4528218373272
3470649792474
5475584230977
3735923735159
4335034980318
3869813965416
3887891800685
4195368495996
3973477404866
4023453112480
6673473584946
8530403476314
4283050432507
4556926071448
6658095525890
7395974046871
4901162076133
5236729228339
8564079757742
6684089650455
6961002962267
6843170726865
6846003774846
6944132632929
7861369205551
7206573527633
7340463757890
7605737700575
7623815535844
9236197056451
7757705766101
14239144773736
12418295276999
7996930517346
10137891304472
8839976503955
15229553236419
12197732190606
14602547574504
11559257602023
11747165850979
11585251726588
11920818878794
13527260377320
19102384927454
24165461127978
14946201458465
13790136407775
14150706160562
14547037285523
26569001437561
15098169523991
20587142354934
22599478091850
15754636283447
16597682270056
18134821821818
22943131975811
31924958229593
18977867808427
26974798325773
23144509328611
23306423453002
25537302258754
41077953797629
31695851794047
23506070605382
30044370982456
30748388430618
28337173693298
33889458105265
29544772691222
28888305931766
28697743446085
30852805807438
32352318553503
33232991345809
34732504091874
41640892427200
35575550078483
57675636067685
41441245274820
41920999784238
64085797153247
42483938413809
52394376537148
52851196144224
46812494058384
57233154052801`;

const part1Text = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;


describe("Day9 tests", () => {
    it('solvePart1 solution with fake data is correct', () => {
        expect(solvePart1(part1Text, 5)).toBe(127);
    });

    it('solvePart1 solution with real data is correct', () => {
        expect(solvePart1(realText, 25)).toBe(10884537);
    });

    it('solvePart2 solution with fake data is correct', () => {
        expect(solvePart2(part1Text, 5)).toBe(62);
    });
    
    it('solvePart2 solution with real data is correct', () => {
        expect(solvePart2(realText, 25)).toBe(1261309);
    });
});
