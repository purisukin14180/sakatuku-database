const FORMATIONS_DATA = [
    // 初期解放(1コイン)
    { name: "4-4-2B ポゼッション", policy: "ポゼッション", formation: "4-4-2B", level: "初期", coin: 1, keys: "LDM(パサーⅠ以上)", effect: "ジャンプ・走力 30%UP" },
    { name: "3-5-2A ポゼッション", policy: "ポゼッション", formation: "3-5-2A", level: "初期", coin: 1, keys: "RCF(ラインブレーカーⅠ以上)", effect: "ロングパス・パスカット 30%UP" },
    { name: "3-6-1A カウンター", policy: "カウンター", formation: "3-6-1A", level: "初期", coin: 1, keys: "RDM(ハードマーカーⅠ以上)", effect: "キープ力・コンタクト 30%UP" },
    { name: "4-3-3A カウンター", policy: "カウンター", formation: "4-3-3A", level: "初期", coin: 1, keys: "RB(攻撃的FBⅠ以上)", effect: "パスカット・コンタクト 30%UP" },
    { name: "4-3-3B リアクション", policy: "リアクション", formation: "4-3-3B", level: "初期", coin: 1, keys: "GK(オーソドックスGKⅠ以上)", effect: "キック精度・コンタクト 30%UP" },
    { name: "4-5-1B リアクション", policy: "リアクション", formation: "4-5-1B", level: "初期", coin: 1, keys: "CF(ストライカーⅠ以上)", effect: "パスカット・敏捷性 30%UP" },
    { name: "4-4-2B ムービング", policy: "ムービング", formation: "4-4-2B", level: "初期", coin: 1, keys: "LSB(守備的FBⅠ以上)", effect: "ロングパス・キック精度 30%UP" },
    { name: "4-4-2C ムービング", policy: "ムービング", formation: "4-4-2C", level: "初期", coin: 1, keys: "LAM(アタッカーⅠ以上)", effect: "ロングパス・キープ力 30%UP" },
    
    // 初期解放(2コイン)
    { name: "シュヴァルツ・ゲルベン'97", policy: "ポゼッション", formation: "3-5-2 B", level: "初期", coin: 2, keys: "RCF(ポストプレイヤーⅠ以上)", effect: "冷静さ・マーク 50%UP" },
    { name: "チームメッリ'97", policy: "カウンター", formation: "3-4-3 A", level: "初期", coin: 2, keys: "GK(スイーパーGKⅠ以上)", effect: "キック力・ロングパス 50%UP" },
    { name: "ディー・ヴェルフェ'09", policy: "リアクション", formation: "4-4-2 D", level: "初期", coin: 2, keys: "AM(セントラルMFⅠ以上)", effect: "冷静さ・ボールタッチ 50%UP" },
    { name: "ロス・グアラニエス'02", policy: "ムービング", formation: "5-4-1 A", level: "初期", coin: 2, keys: "CB(組立CBⅠ以上)", effect: "キック力・マーク 50%UP" },

    // Lv.10解放
    { name: "太極戦士'02", policy: "ポゼッション", formation: "3-4-3 B", level: "10", coin: 5, keys: "CB(ストッパーⅡ以上)、LM(ドリブラーⅡ以上)", effect: "キック精度・キープ力・ジャンプ 60%UP" },
    { name: "ディアブル・ルージュ'18", policy: "ポゼッション", formation: "4-3-3 A", level: "10", coin: 5, keys: "RCB(組立CBⅡ以上)、RWG(ドリブラーⅡ以上)", effect: "キープ力・ジャンプ・スタミナ 60%UP" },
    { name: "ロス・プロス'01", policy: "カウンター", formation: "4-4-2 A", level: "10", coin: 5, keys: "GK(スイーパーGKⅡ以上)、RSB(守備的FBⅡ以上)", effect: "突破力・キープ力・ジャンプ 60%UP" },
    { name: "ラ・ブランキロハ'82", policy: "カウンター", formation: "4-4-2 E", level: "10", coin: 5, keys: "AM(アタッカーⅡ以上)、LAM(パサーⅡ以上)", effect: "突破力・セービング・コンタクト 60%UP" },
    { name: "アズーリ'06", policy: "リアクション", formation: "4-5-1 B", level: "10", coin: 5, keys: "RCB(組立CBⅡ以上)、LM(ドリブラーⅡ以上)", effect: "突破力・ジャンプ・敏捷性 60%UP" },
    { name: "FCハリウッド'01", policy: "リアクション", formation: "5-4-1 A", level: "10", coin: 5, keys: "RB(攻撃的FBⅡ以上)、CF(ラインブレーカーⅡ以上)", effect: "キープ力・パスカット・コンタクト 60%UP" },
    { name: "ダニッシュ・ダイナマイト'86", policy: "ムービング", formation: "3-5-2 B", level: "10", coin: 5, keys: "LDM(ハードマーカーⅡ以上)、RCF(ラインブレーカーⅡ以上)", effect: "突破力・セービング・ジャンプ 60%UP" },
    { name: "ヴァルデ・アマレーラ'02", policy: "ムービング", formation: "5-3-2 A", level: "10", coin: 5, keys: "CB(ストッパーⅡ以上)、LCF(ストライカーⅡ以上)", effect: "パスカット・ジャンプ・コンタクト 60%UP" },

    // Lv.13解放
    { name: "ウルチカ'03", policy: "ポゼッション", formation: "4-5-1 A", level: "13", coin: 10, keys: "LB(守備的FBⅡ以上)、RAM(アタッカーⅡ以上)、CF(ポストプレイヤーⅡ以上)", effect: "決定力・ロングパス・キープ力 80%UP" },
    { name: "ヒノマルスタイル'68", policy: "カウンター", formation: "3-4-3 C", level: "13", coin: 10, keys: "LCB(ストッパーⅡ以上)、LW(ドリブラーⅡ以上)、CF(ストライカーⅡ以上)", effect: "決定力・ショートパス・キ精度 80%UP" },
    { name: "クロチャーティ'99", policy: "リアクション", formation: "5-3-2 B", level: "13", coin: 10, keys: "LDM(セントラルMFⅡ以上)、AM(アタッカーⅡ以上)、RCF(ストライカーⅡ以上)", effect: "決定力・パスカット・ジャンプ 80%UP" },
    { name: "レ・ルージュ・エ・ブラン'04", policy: "ムービング", formation: "4-3-3 B", level: "13", coin: 10, keys: "GK(オーソドックスGKⅡ以上)、LDM(パサーⅡ以上)、LW(サイドアタッカーⅡ以上)", effect: "決定力・キープ力・パスカット 80%UP" },

    // Lv.20解放
    { name: "ラ・デア'22", policy: "ポゼッション", formation: "3-5-2 B", level: "20", coin: 20, keys: "CB(ストッパーⅡ以上)、RM(ドリブラーⅡ以上)、LCF(ラインブレーカーⅢ以上)", effect: "冷静さ・パスカット・ジャンプ・コンタクト 80%UP" },
    { name: "ラ・ロハ'24", policy: "ポゼッション", formation: "4-3-3 B", level: "20", coin: 20, keys: "RB(攻撃的FBⅡ以上)、RDM(パサーⅡ以上)、RW(ドリブラーⅢ以上)", effect: "冷静さ・キック精度・パスカット・コンタクト 80%UP" },
    { name: "レ・ブルー'98", policy: "カウンター", formation: "4-4-2 D", level: "20", coin: 20, keys: "LSB(守備的FBⅡ以上)、AM(セントラルMFⅡ以上)、RCF(ストライカーⅢ以上)", effect: "キック力・ジャンプ・コンタクト・敏捷性 80%UP" },
    { name: "ディアボロ・ディ・ミラノ'99", policy: "カウンター", formation: "3-4-3 B", level: "20", coin: 20, keys: "RCB(組立CBⅡ以上)、RDM(セントラルMFⅢ以上)、LW(ドリブラーⅡ以上)", effect: "キープ力・突破力・ジャンプ・コンタクト 80%UP" },
    { name: "ゴーデンゾーネン'94", policy: "リアクション", formation: "3-4-3 C", level: "20", coin: 20, keys: "CB(ストッパーⅡ以上)、LDM(ハードマーカーⅡ以上)、RDM(セントラルMFⅢ以上)", effect: "キック精度・突破力・コンタクト・スタミナ 80%UP" },
    { name: "セレソン・ダス・キナス'16", policy: "リアクション", formation: "4-4-2 A", level: "20", coin: 20, keys: "LSB(攻撃的FBⅡ以上)、LM(サイドアタッカーⅡ以上)、RCF(ストライカーⅢ以上)", effect: "パスカット・ジャンプ・コンタクト・走力 80%UP" },
    { name: "ソベラーノ'94", policy: "ムービング", formation: "4-4-2 E", level: "20", coin: 20, keys: "LAM(パサーⅡ以上)、RAM(アタッカーⅡ以上)、LCF(ストライカーⅢ以上)", effect: "キープ力・突破力・コンタクト・スタミナ 80%UP" },
    { name: "アルビセレステ'01", policy: "ムービング", formation: "3-4-3 A", level: "20", coin: 20, keys: "LCB(組立CBⅡ以上)、LM(サイドアタッカーⅢ以上)、CF(ストライカーⅡ以上)", effect: "ジャンプ・コンタクト・走力・敏捷性 80%UP" },

    // イベント限定
    { name: "イ・フリウラーニ'98", policy: "リアクション", formation: "3-4-3 B", level: "イベント", coin: 0, keys: "GK(オーソドックスGKⅡ以上)、LCB(組立CBⅡ以上)、LM(サイドアタッカーⅡ以上)", effect: "パスカット・キープ力・敏捷性 80%UP" },
    { name: "シュヴァルツ・ゲルベン'16", policy: "カウンター", formation: "4-5-1 A", level: "イベント", coin: 0, keys: "GK(オーソドックスGKⅡ以上)、LCB(ストッパーⅡ以上)、RB(攻撃的FBⅡ以上)", effect: "コンタクト・走力・キック精度 80%UP" },
    { name: "ダニッシュ・ダイナマイト'18", policy: "ムービング", formation: "4-5-1 B", level: "イベント", coin: 0, keys: "LCB(ストッパーⅡ以上)、AM(パサーⅡ以上)、CF(ストライカーⅡ以上)", effect: "コンタクト・走力・キープ力 80%UP" },
    { name: "エル・レオン'70", policy: "ポゼッション", formation: "3-4-3 C", level: "イベント", coin: 0, keys: "CCB(ストッパーⅡ以上)、LAM(アタッカーⅡ以上)、LW(ドリブラーⅡ以上)", effect: "ロングパス・コンタクト・キープ力 80%UP" }
];