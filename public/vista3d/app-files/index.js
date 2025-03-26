/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function () {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  if (window.matchMedia) {
    var setMode = function () {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function () {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  var scenes = data.scenes.map(function (data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    data.linkHotspots.forEach(function (hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    data.infoHotspots.forEach(function (hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // 🔥 Agregamos múltiples presidentes como hotspots con texto personalizado
    var presidents = [
      {
        img: 'Presi1.png',
        title: 'Belisario Betancur (1982 - 1986)',
        content: `
        <p>
          El contexto de su gobierno estuvo marcado por grandes desafíos. Anteriormente, su imagen se había visto afectada por la memoria de la masacre de Santa Bárbara, mientras que, más adelante, su mandato se enfrentó a hechos como la tragedia del Palacio de Justicia, el aumento de desapariciones forzadas y el auge del paramilitarismo. Estas circunstancias sembraron dudas sobre la sinceridad de sus convicciones de paz y su capacidad para liderar un cambio significativo.
        </p>
        <p>
          A pesar de este contexto, Betancur logró un avance significativo al abrir la puerta al diálogo con las Fuerzas Armadas Revolucionarias de Colombia – Ejército del Pueblo (FARC-EP). En marzo de 1984, ambas partes firmaron el <strong>Acuerdo de La Uribe</strong>, en Meta, el cual incluyó un cese al fuego y tregua como pasos iniciales hacia una solución negociada al conflicto armado interno.
        </p>
        <br>
        <h4 style="font-size: 16px; font-weight: bold;">Uribe, Meta, fue el escenario del acuerdo</h4>
        <p>
          La elección de La Uribe como epicentro del proceso de paz no fue casual. Este municipio en el departamento del Meta era un territorio de fuerte influencia de las FARC-EP, lo que facilitaba su logística y representaba un entorno seguro para las reuniones. Además, La Uribe simbolizaba el control territorial de la guerrilla, por lo que negociar allí demostraba un reconocimiento implícito de su presencia y capacidad organizativa, lo cual generó confianza para entablar diálogos formales.
        </p>
        `,
        yaw: 0.5,
        pitch: -0.2
      },
      {
        img: 'Presi2.png',
        title: 'Virgilio Barco Vargas (1986)',
        content: `
        <p>
Uno de los aspectos más innovadores del Acuerdo de La Uribe fue la posibilidad de que la insurgencia se organizara política, económica y socialmente, según su libre decisión. De esta manera, se planteó la creación de un movimiento político que brindara garantías a los integrantes de las FARC-EP para participar en elecciones y ocupar cargos públicos. Este movimiento, conocido como la Unión Patriótica (UP), fue concebido como un puente para que los guerrilleros se integraran plenamente a la vida civil al concluir las negociaciones.        </p>
        <br>        
<p>
El gobierno nacional autorizó que miembros destacados del grupo armado pudieran actuar como activistas y dirigentes políticos. Así, la UP reunió no solo a excombatientes, sino también a diversos sectores sociales que compartían la visión de una transformación social desde las instituciones democráticas.        </p>
        <br>
        <p>
A pesar de los avances, el Acuerdo de La Uribe enfrentó serios obstáculos. El asesinato de líderes políticos, incluidos miembros de la UP, y el incumplimiento de reformas sociales pactadas minaron la confianza en el proceso, dejando una lección importante sobre los riesgos y retos de los diálogos de paz.        </p>
        `,
        yaw: 2.0,
        pitch: -0.2
      },
      {
        img: 'Presi3.png',
        title: 'César Gaviria (1990 - 1994)',
        content: `
        <p>
El gobierno de César Gaviria (1990-1994) se destacó por su capacidad para convocar la Asamblea Nacional Constituyente de 1991, un hito que modernizó la Constitución y fortaleció la participación ciudadana. Además, logró acuerdos de desmovilización con guerrillas como el M-19, el PRT, el Quintín Lame y el EPL.         <br>        
<p>
Sin embargo, su administración también estuvo marcada por contradicciones significativas. El mismo día del inicio de la Constituyente, ordenó bombardear la sede del Secretariado de las FARC, enviando señales confusas sobre el compromiso estatal con la paz.  Además, la promulgación de la Ley 356 de 1994, que regulaba las empresas privadas de seguridad, dio sustento legal a estructuras paramilitares, fortaleciendo a estos grupos que perpetuarían la violencia en el país.        <br>
      
        `, yaw: 3.0,
        pitch: -0.1
      },
      {
        img: 'Presi4.png',
        title: 'Ernesto Samper',
        content: `<p>Intentó iniciar diálogos con el ELN y las FARC pero su gobierno fue golpeado por el escándalo del proceso 8.000, debilitando la legitimidad del proceso.</p>`,
        yaw: -1.0,
        pitch: 0.2
      },
      {
        img: 'Presi5.png',
        title: 'Andrés Pastrana',
        content: `<p>Conocido por el fallido proceso del Caguán con las FARC. Apostó por una zona desmilitarizada, pero no logró avances concretos.</p>`,
        yaw: 1.5,
        pitch: 0.1
      },
      {
        img: 'Presi6.png',
        title: 'Juan Manuel Santos',
        content: `<p>Firmó el histórico Acuerdo de Paz con las FARC en 2016 y recibió el Premio Nobel de la Paz. Su gestión transformó la política de seguridad hacia una visión de reconciliación.</p>`,
        yaw: -1.5,
        pitch: -0.3
      }
    ];

    presidents.forEach(function (president) {
      var wrapper = document.createElement('div');
      wrapper.style.position = 'relative';
      wrapper.style.display = 'inline-block';

      var img = document.createElement('img');
      img.src = 'imagenes/' + president.img;
      img.style.width = '160px';
      img.style.borderRadius = '10px';
      img.style.cursor = 'pointer';
      img.style.transition = 'transform 0.3s ease';

      var tooltip = document.createElement('div');
      tooltip.innerHTML = `
        <div style="font-size: 14px; line-height: 1.5;">
          <h3 style="font-size: 18px; color: gold; font-weight: bold; margin-top: 0;">${president.title}</h3>
          ${president.content}
        </div>
      `;

      tooltip.style.position = 'absolute';
      tooltip.style.top = '-120px';
      tooltip.style.left = '180px';
      tooltip.style.width = '400px';
      tooltip.style.background = 'rgba(0, 0, 0, 0.85)';
      tooltip.style.color = '#fff';
      tooltip.style.padding = '16px';
      tooltip.style.borderRadius = '10px';
      tooltip.style.fontSize = '14px';
      tooltip.style.lineHeight = '1.5';
      tooltip.style.opacity = 0;
      tooltip.style.pointerEvents = 'none';
      tooltip.style.transition = 'opacity 0.3s ease';
      tooltip.style.zIndex = 9999;
      tooltip.style.boxShadow = '0 4px 15px rgba(0,0,0,0.7)';
      tooltip.style.textAlign = 'justify';

      wrapper.appendChild(img);
      wrapper.appendChild(tooltip);

      img.addEventListener('mouseenter', function () {
        tooltip.style.opacity = 1;
      });

      img.addEventListener('mouseleave', function () {
        tooltip.style.opacity = 0;
      });

      scene.hotspotContainer().createHotspot(wrapper, {
        yaw: president.yaw,
        pitch: president.pitch
      });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI / 2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function () {
      screenfull.toggle();
    });
    screenfull.on('change', function () {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  sceneListToggleElement.addEventListener('click', toggleSceneList);

  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  scenes.forEach(function (scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function () {
      switchScene(scene);
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  var velocity = 0.7;
  var friction = 3;

  var controls = viewer.controls();
  controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(viewUpElement, 'y', -velocity, friction), true);
  controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(viewDownElement, 'y', velocity, friction), true);
  controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
  controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(viewInElement, 'zoom', -velocity, friction), true);
  controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom', velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  switchScene(scenes[0]);
})();
