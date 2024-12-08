import {Da as _, E as I, F as r, H as T, Ha as Y, Qa as l, cb as J, d as o, fa as N, i as S, kb as C, m as k, nb as P, o as D, pa as q, qb as b, s as V, sa as R, sb as j, t as B, ub as F, wa as E, wb as W, x as e, y as p} from "./chunk-TB2AAUCW.mjs";
P.loadFonts([]);
var z = [{
    explicitInter: !0,
    fonts: []
}]
  , G = [".framer-ea2xW .framer-styles-preset-19lol7v:not(.rich-text-wrapper), .framer-ea2xW .framer-styles-preset-19lol7v.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-decoration: none; --framer-link-text-decoration: none; }"]
  , L = "framer-ea2xW";
var le = ["WifejIlw_", "BOSjN7_7U", "AZ5mmH8ST", "bYEnV4r6y"]
  , ie = "framer-DIcbM"
  , me = {
    AZ5mmH8ST: "framer-v-1uib1de",
    BOSjN7_7U: "framer-v-u8kqtx",
    bYEnV4r6y: "framer-v-1d5dtov",
    WifejIlw_: "framer-v-hymiok"
};
function h(t, ...a) {
    let m = {};
    return a?.forEach(i => i && Object.assign(m, t[i])),
    m
}
var se = {
    delay: 0,
    duration: .5,
    ease: [0, .34, 0, .99],
    type: "tween"
}
  , fe = {
    delay: 0,
    duration: .8,
    ease: [.12, .23, 0, .98],
    type: "tween"
}
  , w = {
    opacity: .6,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: fe
}
  , ce = ({value: t, children: a}) => {
    let m = k(I)
      , i = t ?? m.transition
      , s = V( () => ({
        ...m,
        transition: i
    }), [JSON.stringify(i)]);
    return e(I.Provider, {
        value: s,
        children: a
    })
}
  , de = r.create(o)
  , pe = {
    "Variant 1": "WifejIlw_",
    "Variant 2": "BOSjN7_7U",
    "Variant 3": "AZ5mmH8ST",
    "Variant 4": "bYEnV4r6y"
}
  , he = ({height: t, id: a, width: m, ...i}) => {
    var s, c;
    return {
        ...i,
        variant: (c = (s = pe[i.variant]) !== null && s !== void 0 ? s : i.variant) !== null && c !== void 0 ? c : "WifejIlw_"
    }
}
  , xe = (t, a) => t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-")
  , ge = S(function(t, a) {
    let {activeLocale: m, setLocale: i} = N()
      , {style: s, className: c, layoutId: y, variant: O, ...H} = he(t)
      , {baseVariant: f, classNames: X, clearLoadingGesture: be, gestureHandlers: Z, gestureVariant: d, isLoading: ye, setGestureState: ve, setVariant: g, variants: M} = C({
        cycleOrder: le,
        defaultVariant: "WifejIlw_",
        variant: O,
        variantClassNames: me
    })
      , n = xe(t, M)
      , {activeVariantCallback: u, delay: Ie} = J(f)
      , Q = u(async (...v) => {
        g("BOSjN7_7U")
    }
    )
      , A = u(async (...v) => {
        g("WifejIlw_")
    }
    )
      , U = u(async (...v) => {
        g("bYEnV4r6y")
    }
    )
      , K = u(async (...v) => {
        g("AZ5mmH8ST")
    }
    )
      , $ = B(null)
      , ee = D()
      , re = [L]
      , we = _();
    return e(T, {
        id: y ?? ee,
        children: e(de, {
            animate: M,
            initial: !1,
            children: e(ce, {
                value: se,
                children: p(r.div, {
                    ...H,
                    ...Z,
                    className: E(ie, ...re, "framer-hymiok", c, X),
                    "data-framer-name": "Variant 1",
                    layoutDependency: n,
                    layoutId: "WifejIlw_",
                    ref: a ?? $,
                    style: {
                        backdropFilter: "none",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        WebkitBackdropFilter: "none",
                        ...s
                    },
                    variants: {
                        AZ5mmH8ST: {
                            borderBottomLeftRadius: 27,
                            borderBottomRightRadius: 27,
                            borderTopLeftRadius: 27,
                            borderTopRightRadius: 27
                        },
                        bYEnV4r6y: {
                            backdropFilter: "blur(10px)",
                            backgroundColor: "rgba(0, 0, 0, 0.15)",
                            borderBottomLeftRadius: 27,
                            borderBottomRightRadius: 27,
                            borderTopLeftRadius: 27,
                            borderTopRightRadius: 27,
                            WebkitBackdropFilter: "blur(10px)"
                        }
                    },
                    ...h({
                        AZ5mmH8ST: {
                            "data-framer-name": "Variant 3"
                        },
                        BOSjN7_7U: {
                            "data-framer-name": "Variant 2"
                        },
                        bYEnV4r6y: {
                            "data-framer-name": "Variant 4"
                        }
                    }, f, d),
                    children: [e(r.div, {
                        className: "framer-1fy8cie",
                        layoutDependency: n,
                        layoutId: "I2cPrpYLn",
                        children: e(l, {
                            href: "https://kybo.group",
                            nodeId: "dlbSqVX3h",
                            openInNewTab: !1,
                            children: e(j, {
                                as: "a",
                                className: "framer-1jzrl3o framer-104n8ny",
                                "data-framer-name": "Graphic",
                                fill: "black",
                                intrinsicHeight: 625,
                                intrinsicWidth: 604,
                                layoutDependency: n,
                                layoutId: "dlbSqVX3h",
                                svg: '<svg width="604" height="625" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M239.889 16.636c38.434-22.181 85.788-22.181 124.222 0l101.779 58.74c26.041 15.028 25.999 52.629-.076 67.599l-156.287 89.734c-25.553 17.838-38.175 33.745-44.013 59.124-5.686 24.712-31.925 40.955-53.925 28.344L35.826 219.427c-19.66-11.269-30.95-34.692-20.08-54.576 9.918-18.142 24.79-33.607 46.365-45.614l177.778-102.6Zm21.671 459.301v51.554c0 .527.01 1.051.03 1.573v57.882c0 29.082-31.333 47.385-56.665 33.101L62.111 539.514C23.677 517.332 0 476.339 0 431.976v-74.285c0-29.212 31.588-47.5 56.921-32.954l173.775 99.774a61.523 61.523 0 0 1 30.864 51.426Zm80.819-27.556V342.627a61.521 61.521 0 0 1 30.895-53.352l166.319-95.494c26.647-15.299 59.985-4.814 63.828 25.671.38 3.011.579 5.523.579 7.323v205.201c0 44.363-23.677 85.356-62.111 107.538l-142.815 80.533c-25.331 14.284-56.665-4.019-56.665-33.1V450.781c0-.801-.01-1.601-.03-2.4Z" fill="#fff"/></svg>',
                                withExternalLayout: !0
                            })
                        })
                    }), p(r.div, {
                        className: "framer-1ma0hef",
                        layoutDependency: n,
                        layoutId: "BJ7w9srMF",
                        children: [p(r.div, {
                            className: "framer-13aqahp",
                            layoutDependency: n,
                            layoutId: "HQke4RMxl",
                            children: [e(b, {
                                __fromCanvasComponent: !0,
                                children: e(o, {
                                    children: e(r.p, {
                                        style: {
                                            "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                            "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-letter-spacing": "-0.02em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                        },
                                        children: e(l, {
                                            href: "https://kybo.group/brand",
                                            nodeId: "pz7VoqGH1",
                                            openInNewTab: !1,
                                            smoothScroll: !1,
                                            children: e(r.a, {
                                                className: "framer-styles-preset-19lol7v",
                                                "data-styles-preset": "n5WqEepGh",
                                                children: "Brand"
                                            })
                                        })
                                    })
                                }),
                                className: "framer-1tmhgkx",
                                fonts: ["CUSTOM;Plus Jakarta Sans Bold"],
                                layoutDependency: n,
                                layoutId: "pz7VoqGH1",
                                style: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)"
                                },
                                verticalAlignment: "top",
                                whileHover: w,
                                withExternalLayout: !0,
                                ...h({
                                    AZ5mmH8ST: {
                                        children: e(o, {
                                            children: e(r.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                                    "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-letter-spacing": "-0.02em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: e(l, {
                                                    href: "https://kybo.group/brand",
                                                    nodeId: "pz7VoqGH1",
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e(r.a, {
                                                        className: "framer-styles-preset-19lol7v",
                                                        "data-styles-preset": "n5WqEepGh",
                                                        children: "Brand"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    bYEnV4r6y: {
                                        children: e(o, {
                                            children: e(r.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                                    "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-letter-spacing": "-0.02em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: e(l, {
                                                    href: "https://kybo.group/brand",
                                                    nodeId: "pz7VoqGH1",
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e(r.a, {
                                                        className: "framer-styles-preset-19lol7v",
                                                        "data-styles-preset": "n5WqEepGh",
                                                        children: "Brand"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                }, f, d)
                            }), e(b, {
                                __fromCanvasComponent: !0,
                                children: e(o, {
                                    children: e(r.p, {
                                        style: {
                                            "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                            "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-letter-spacing": "-0.02em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                        },
                                        children: e(l, {
                                            href: "https://kybo.group/hub",
                                            nodeId: "vroNoMG4k",
                                            openInNewTab: !1,
                                            smoothScroll: !1,
                                            children: e(r.a, {
                                                className: "framer-styles-preset-19lol7v",
                                                "data-styles-preset": "n5WqEepGh",
                                                children: "Hub"
                                            })
                                        })
                                    })
                                }),
                                className: "framer-6y3g9g",
                                fonts: ["CUSTOM;Plus Jakarta Sans Bold"],
                                layoutDependency: n,
                                layoutId: "vroNoMG4k",
                                style: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)"
                                },
                                verticalAlignment: "top",
                                whileHover: w,
                                withExternalLayout: !0,
                                ...h({
                                    AZ5mmH8ST: {
                                        children: e(o, {
                                            children: e(r.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                                    "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-letter-spacing": "-0.02em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: e(l, {
                                                    href: "https://kybo.group/hub",
                                                    nodeId: "vroNoMG4k",
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e(r.a, {
                                                        className: "framer-styles-preset-19lol7v",
                                                        "data-styles-preset": "n5WqEepGh",
                                                        children: "Hub"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    bYEnV4r6y: {
                                        children: e(o, {
                                            children: e(r.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                                    "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-letter-spacing": "-0.02em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: e(l, {
                                                    href: "https://kybo.group/hub",
                                                    nodeId: "vroNoMG4k",
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e(r.a, {
                                                        className: "framer-styles-preset-19lol7v",
                                                        "data-styles-preset": "n5WqEepGh",
                                                        children: "Hub"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                }, f, d)
                            }), e(b, {
                                __fromCanvasComponent: !0,
                                children: e(o, {
                                    children: e(r.p, {
                                        style: {
                                            "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                            "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-letter-spacing": "-0.02em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                        },
                                        children: e(l, {
                                            href: "https://kybo.group/ai",
                                            nodeId: "Zl1I86U2X",
                                            openInNewTab: !1,
                                            smoothScroll: !1,
                                            children: e(r.a, {
                                                className: "framer-styles-preset-19lol7v",
                                                "data-styles-preset": "n5WqEepGh",
                                                children: "AI"
                                            })
                                        })
                                    })
                                }),
                                className: "framer-1rr0xdl",
                                fonts: ["CUSTOM;Plus Jakarta Sans Bold"],
                                layoutDependency: n,
                                layoutId: "Zl1I86U2X",
                                style: {
                                    "--extracted-r6o4lv": "rgb(255, 255, 255)"
                                },
                                verticalAlignment: "top",
                                whileHover: w,
                                withExternalLayout: !0,
                                ...h({
                                    AZ5mmH8ST: {
                                        children: e(o, {
                                            children: e(r.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                                    "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-letter-spacing": "-0.02em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: e(l, {
                                                    href: "https://kybo.group/ai",
                                                    nodeId: "Zl1I86U2X",
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e(r.a, {
                                                        className: "framer-styles-preset-19lol7v",
                                                        "data-styles-preset": "n5WqEepGh",
                                                        children: "AI"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    bYEnV4r6y: {
                                        children: e(o, {
                                            children: e(r.p, {
                                                style: {
                                                    "--font-selector": "Q1VTVE9NO1BsdXMgSmFrYXJ0YSBTYW5zIEJvbGQ=",
                                                    "--framer-font-family": '"Plus Jakarta Sans Bold", "Plus Jakarta Sans Bold Placeholder", sans-serif',
                                                    "--framer-font-size": "37px",
                                                    "--framer-letter-spacing": "-0.02em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                                },
                                                children: e(l, {
                                                    href: "https://kybo.group/ai",
                                                    nodeId: "Zl1I86U2X",
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e(r.a, {
                                                        className: "framer-styles-preset-19lol7v",
                                                        "data-styles-preset": "n5WqEepGh",
                                                        children: "AI"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                }, f, d)
                            })]
                        }), p(r.div, {
                            className: "framer-16y199f",
                            "data-highlight": !0,
                            layoutDependency: n,
                            layoutId: "r8U7p4LoF",
                            onTap: Q,
                            ...h({
                                AZ5mmH8ST: {
                                    onTap: U
                                },
                                BOSjN7_7U: {
                                    onTap: A
                                },
                                bYEnV4r6y: {
                                    onTap: K
                                }
                            }, f, d),
                            children: [e(r.div, {
                                className: "framer-1807dxu",
                                layoutDependency: n,
                                layoutId: "wmwVVfCuy",
                                style: {
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderBottomLeftRadius: 351,
                                    borderBottomRightRadius: 351,
                                    borderTopLeftRadius: 351,
                                    borderTopRightRadius: 351,
                                    rotate: 0
                                },
                                variants: {
                                    BOSjN7_7U: {
                                        rotate: 45
                                    },
                                    bYEnV4r6y: {
                                        rotate: 45
                                    }
                                }
                            }), e(r.div, {
                                className: "framer-1w4y8qz",
                                layoutDependency: n,
                                layoutId: "KR2Oj8Q7a",
                                style: {
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderBottomLeftRadius: 351,
                                    borderBottomRightRadius: 351,
                                    borderTopLeftRadius: 351,
                                    borderTopRightRadius: 351,
                                    rotate: 0
                                },
                                variants: {
                                    BOSjN7_7U: {
                                        rotate: -45
                                    },
                                    bYEnV4r6y: {
                                        rotate: -45
                                    }
                                }
                            })]
                        })]
                    })]
                })
            })
        })
    })
})
  , ue = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-DIcbM.framer-104n8ny, .framer-DIcbM .framer-104n8ny { display: block; }", ".framer-DIcbM.framer-hymiok { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 819px; }", ".framer-DIcbM .framer-1fy8cie { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-DIcbM .framer-1jzrl3o { aspect-ratio: 0.9664 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 50px); position: relative; text-decoration: none; width: 48px; }", ".framer-DIcbM .framer-1ma0hef { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 27px; }", ".framer-DIcbM .framer-13aqahp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: 24px; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-DIcbM .framer-1tmhgkx, .framer-DIcbM .framer-6y3g9g, .framer-DIcbM .framer-1rr0xdl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-DIcbM .framer-16y199f { align-content: center; align-items: center; aspect-ratio: 0.9615384615384616 / 1; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: 26px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: var(--framer-aspect-ratio-supported, 25px); z-index: 1; }", ".framer-DIcbM .framer-1807dxu { flex: none; height: 3px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 5px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-DIcbM .framer-1w4y8qz { bottom: 5px; flex: none; height: 3px; left: 0px; overflow: hidden; position: absolute; right: 0px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DIcbM .framer-1fy8cie, .framer-DIcbM .framer-1ma0hef, .framer-DIcbM .framer-13aqahp, .framer-DIcbM .framer-16y199f { gap: 0px; } .framer-DIcbM .framer-1fy8cie > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-DIcbM .framer-1fy8cie > :first-child, .framer-DIcbM .framer-1ma0hef > :first-child, .framer-DIcbM .framer-13aqahp > :first-child { margin-left: 0px; } .framer-DIcbM .framer-1fy8cie > :last-child, .framer-DIcbM .framer-1ma0hef > :last-child, .framer-DIcbM .framer-13aqahp > :last-child { margin-right: 0px; } .framer-DIcbM .framer-1ma0hef > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-DIcbM .framer-13aqahp > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-DIcbM .framer-16y199f > * { margin: 0px; margin-bottom: calc(11px / 2); margin-top: calc(11px / 2); } .framer-DIcbM .framer-16y199f > :first-child { margin-top: 0px; } .framer-DIcbM .framer-16y199f > :last-child { margin-bottom: 0px; } }", ".framer-DIcbM.framer-v-u8kqtx .framer-1ma0hef { gap: 20px; width: min-content; }", ".framer-DIcbM.framer-v-u8kqtx .framer-13aqahp { gap: 16px; }", ".framer-DIcbM.framer-v-u8kqtx .framer-1807dxu, .framer-DIcbM.framer-v-1d5dtov .framer-1807dxu { top: 12px; }", ".framer-DIcbM.framer-v-u8kqtx .framer-1w4y8qz, .framer-DIcbM.framer-v-1d5dtov .framer-1w4y8qz { bottom: 11px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DIcbM.framer-v-u8kqtx .framer-1ma0hef, .framer-DIcbM.framer-v-u8kqtx .framer-13aqahp { gap: 0px; } .framer-DIcbM.framer-v-u8kqtx .framer-1ma0hef > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-DIcbM.framer-v-u8kqtx .framer-1ma0hef > :first-child, .framer-DIcbM.framer-v-u8kqtx .framer-13aqahp > :first-child { margin-left: 0px; } .framer-DIcbM.framer-v-u8kqtx .framer-1ma0hef > :last-child, .framer-DIcbM.framer-v-u8kqtx .framer-13aqahp > :last-child { margin-right: 0px; } .framer-DIcbM.framer-v-u8kqtx .framer-13aqahp > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } }", ".framer-DIcbM.framer-v-1uib1de.framer-hymiok { align-content: flex-start; align-items: flex-start; padding: 10px; width: 321px; will-change: var(--framer-will-change-override, transform); }", ".framer-DIcbM.framer-v-1uib1de .framer-1ma0hef { align-content: flex-end; align-items: flex-end; flex: 1 0 0px; flex-direction: column; height: 50px; justify-content: flex-start; padding: 12px 0px 0px 0px; width: 1px; }", ".framer-DIcbM.framer-v-1uib1de .framer-13aqahp { align-content: flex-end; align-items: flex-end; flex-direction: column; height: min-content; order: 1; width: 100%; }", ".framer-DIcbM.framer-v-1uib1de .framer-16y199f, .framer-DIcbM.framer-v-1d5dtov .framer-16y199f { order: 0; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DIcbM.framer-v-1uib1de .framer-1ma0hef, .framer-DIcbM.framer-v-1uib1de .framer-13aqahp { gap: 0px; } .framer-DIcbM.framer-v-1uib1de .framer-1ma0hef > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-DIcbM.framer-v-1uib1de .framer-1ma0hef > :first-child, .framer-DIcbM.framer-v-1uib1de .framer-13aqahp > :first-child { margin-top: 0px; } .framer-DIcbM.framer-v-1uib1de .framer-1ma0hef > :last-child, .framer-DIcbM.framer-v-1uib1de .framer-13aqahp > :last-child { margin-bottom: 0px; } .framer-DIcbM.framer-v-1uib1de .framer-13aqahp > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } }", ".framer-DIcbM.framer-v-1d5dtov.framer-hymiok { align-content: flex-start; align-items: flex-start; padding: 18px 22px 22px 22px; width: 321px; will-change: var(--framer-will-change-override, transform); }", ".framer-DIcbM.framer-v-1d5dtov .framer-1ma0hef { align-content: flex-end; align-items: flex-end; flex: 1 0 0px; flex-direction: column; gap: 30px; justify-content: flex-start; padding: 12px 0px 0px 0px; width: 1px; }", ".framer-DIcbM.framer-v-1d5dtov .framer-13aqahp { align-content: flex-end; align-items: flex-end; flex-direction: column; height: min-content; order: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-DIcbM.framer-v-1d5dtov .framer-1ma0hef, .framer-DIcbM.framer-v-1d5dtov .framer-13aqahp { gap: 0px; } .framer-DIcbM.framer-v-1d5dtov .framer-1ma0hef > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-DIcbM.framer-v-1d5dtov .framer-1ma0hef > :first-child, .framer-DIcbM.framer-v-1d5dtov .framer-13aqahp > :first-child { margin-top: 0px; } .framer-DIcbM.framer-v-1d5dtov .framer-1ma0hef > :last-child, .framer-DIcbM.framer-v-1d5dtov .framer-13aqahp > :last-child { margin-bottom: 0px; } .framer-DIcbM.framer-v-1d5dtov .framer-13aqahp > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } }", ...G]
  , x = Y(ge, ue, "framer-DIcbM")
  , Te = x;
x.displayName = "kybonav";
x.defaultProps = {
    height: 50,
    width: 819
};
R(x, {
    variant: {
        options: ["WifejIlw_", "BOSjN7_7U", "AZ5mmH8ST", "bYEnV4r6y"],
        optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
        title: "Variant",
        type: q.Enum
    }
});
F(x, [{
    explicitInter: !0,
    fonts: [{
        family: "Plus Jakarta Sans Bold",
        source: "custom",
        url: "https://framerusercontent.com/assets/ELhXG2q9wtaeUrvumxSBs8Wd4f4.woff2"
    }]
}, ...W(z)], {
    supportsExplicitInterCodegen: !0
});
export {z as a, G as b, L as c, Te as d};
//# sourceMappingURL=chunk-GC5KWRMS.mjs.map
