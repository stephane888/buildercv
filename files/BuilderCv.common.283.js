"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkentity_cv_drupal"] = (typeof self !== 'undefined' ? self : this)["webpackChunkentity_cv_drupal"] || []).push([[283],{

/***/ 792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EtapeDynamiqueSection; }
});

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeDynamiqueSection.vue?vue&type=template&id=8b34b2a4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('ContainerPage', {
    scopedSlots: _vm._u([{
      key: "entete",
      fn: function () {
        return [_c('hbk-button', {
          on: {
            "click": _vm.openModal
          }
        }, [_vm._v(" Conseils ")])];
      },
      proxy: true
    }, {
      key: "app-footer",
      fn: function () {
        return [_c('div', {
          staticClass: "w-100 d-flex justify-content-between"
        }, [_c('router-link', {
          attrs: {
            "to": _vm.previewStep
          }
        }, [_c('hbk-button', {
          staticClass: "mr-4 text-muted",
          attrs: {
            "icon": "arrow-left",
            "variant": "outline-light",
            "icon-variant": ""
          }
        }, [_vm._v(" Etape precedente ")])], 1), _c('router-link', {
          attrs: {
            "to": _vm.nextStep
          }
        }, [_c('hbk-button', {
          attrs: {
            "icon": "save",
            "variant": "outline-info",
            "icon-variant": ""
          },
          on: {
            "click": function ($event) {
              return _vm.$store.dispatch('storeForm/updateLocalStorage');
            }
          }
        }, [_vm._v(" Etape suivante ")])], 1)], 1)];
      },
      proxy: true
    }])
  }, [_c('HCardIcon', {
    attrs: {
      "icon": "exclamation-lg"
    },
    scopedSlots: _vm._u([{
      key: "titre",
      fn: function () {
        return [_vm._v(" Vos diplomes / formations ")];
      },
      proxy: true
    }])
  }, [_c('div', [_vm._v(" Commencez par vos études les plus récentes et remontez dans le passé. Si vous avez suivi de nombreuses études, n'ajoutez que les plus récentes et pertinentes. ")])]), _vm._l(_vm.buildFields(), function (render, k) {
    return _c(render.template, {
      key: k,
      tag: "component",
      attrs: {
        "field": render.field,
        "model": render.model,
        "class-css": ['mb-5'],
        "namespace-store": "storeForm"
      },
      on: {
        "addNewValue": function ($event) {
          return _vm.addNewValue($event, render);
        },
        "removeField": function ($event) {
          return _vm.removeField($event, render);
        }
      }
    });
  })], 2), _c('modalForm', {
    attrs: {
      "title-modal": _vm.titleModal,
      "manage-modal": _vm.manageModal
    },
    on: {
      "closeModal": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function () {
        return [_c('HCardIcon', {
          attrs: {
            "with-mb": false
          }
        })];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./src/formulaires/modalForm.vue + 3 modules
var modalForm = __webpack_require__(2236);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(408);
// EXTERNAL MODULE: ../components_bootstrapvuejs/src/components/fieldsDrupal/loadField.js + 53 modules
var loadField = __webpack_require__(265);
// EXTERNAL MODULE: ./src/request.js
var request = __webpack_require__(1564);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/formulaires/EtapeDynamiqueSection.vue?vue&type=script&lang=js&





/* harmony default export */ var EtapeDynamiqueSectionvue_type_script_lang_js_ = ({
  name: "EtapeDynamiqueSection",
  components: {
    modalForm: modalForm/* default */.Z
  },
  props: {
    keySections: {
      type: String,
      default: ""
    },
    idEtape: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      titleModal: "",
      manageModal: false
    };
  },
  computed: {
    ...(0,vuex_esm/* mapState */.rn)("storeForm", {
      layout_paragraphs: state => state.layout_paragraphs,
      user: state => state.user
    }),
    ...(0,vuex_esm/* mapGetters */.Se)(["etapes"]),
    nextStep() {
      const idEtape = parseInt(this.idEtape) + 1;
      const length = this.etapes.length;
      if (idEtape < length) {
        if (length) {
          return "/layouts-sections/" + this.etapes[idEtape] + "/" + idEtape;
        } else return "/login";
      } else {
        if (this.user && this.user.uid) return "/save-cv";else return "/login";
      }
    },
    previewStep() {
      const idEtape = parseInt(this.idEtape) - 1;
      if (idEtape >= 0) {
        return "/layouts-sections/" + this.etapes[idEtape] + "/" + idEtape;
      } else return "/formation";
    },
    form() {
      if (this.keySections) {
        const fr = this.layout_paragraphs[this.keySections].form;
        return fr;
      } else return {};
    },
    model() {
      if (this.keySections) {
        const md = this.layout_paragraphs[this.keySections].model;
        return md;
      } else return {};
    }
  },
  mounted() {
    //
  },
  methods: {
    buildFields() {
      const fields = [];
      loadField/* default.getConfig */.Z.getConfig(request/* default */.Z);
      for (const i in this.form) {
        fields.push({
          template: loadField/* default.getField */.Z.getField(this.form[i]),
          field: this.form[i],
          model: this.model
        });
      }
      return fields;
    },
    /**
     * --//
     */
    openModal() {
      if (this.manageModal) this.manageModal = false;else this.manageModal = true;
    },
    closeModal() {
      this.manageModal = false;
    },
    addNewValue(value, render) {
      this.model[render.field.name].push(value);
    },
    removeField(index, render) {
      this.model[render.field.name].splice(index, 1);
    }
  }
});
;// CONCATENATED MODULE: ./src/formulaires/EtapeDynamiqueSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var formulaires_EtapeDynamiqueSectionvue_type_script_lang_js_ = (EtapeDynamiqueSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/formulaires/EtapeDynamiqueSection.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  formulaires_EtapeDynamiqueSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EtapeDynamiqueSection = (component.exports);

/***/ })

}]);
//# sourceMappingURL=BuilderCv.common.283.js.map