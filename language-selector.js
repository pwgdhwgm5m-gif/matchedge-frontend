(function () {
  const languages = {
    en: { code: 'EN', flag: '🇬🇧', name: 'English', locale: 'en-GB' },
    tr: { code: 'TR', flag: '🇹🇷', name: 'Türkçe', locale: 'tr-TR' },
    de: { code: 'DE', flag: '🇩🇪', name: 'Deutsch', locale: 'de-DE' },
    fr: { code: 'FR', flag: '🇫🇷', name: 'Français', locale: 'fr-FR' },
    es: { code: 'ES', flag: '🇪🇸', name: 'Español', locale: 'es-ES' },
    it: { code: 'IT', flag: '🇮🇹', name: 'Italiano', locale: 'it-IT' },
  };

  // Page dictionaries are deliberately completed from English first. The
  // overrides below cover the shared navigation, states and the visible
  // analysis vocabulary; any newly added key remains readable in English
  // until its translation is added instead of rendering a broken key name.
  const common = {
    de: {
      brandSub:'PROFI-FUSSBALLANALYSE',loading:'Wird geladen...',navHome:'Start',navMatches:'Spiele',navResults:'Ergebnisse',navNotes:'Mein Schein',navFav:'Favoriten',
      today:'Heute',live:'LIVE',loadError:'Daten konnten nicht geladen werden',legalText:'Die angezeigten Daten und Statistiken dienen nur zu Informationszwecken und stellen keine Wettberatung dar. SoccerEdge Pro haftet nicht für Verluste aufgrund dieser Daten.<br><br>SoccerEdge Pro © 2026 — Entwickelt von Eddas.',
      todayMatches:'HEUTIGE SPIELE',quickAccess:'SCHNELLZUGRIFF',seeAll:'Alle anzeigen',liveNow:'JETZT LIVE',featuredMatch:'TOP-SPIEL',featuredTab:'Top-Spiel',liveTab:'Live',noLiveNow:'Derzeit sind keine Spiele live',noMatchesToday:'Heute wurden keine Spiele gefunden',noMatchesDate:'Für dieses Datum wurden keine Spiele gefunden',
      favoritesLabel:'FAVORISIERTE SPIELE',emptyTitle:'Noch keine Favoriten',emptySub:'Tippe bei einem Spiel auf den Stern (☆)',notStarted:'Nicht begonnen',ft:'ENDE',goal:'TOR',allLeagues:'Alle Ligen',otherMatches:'BEENDETE SPIELE',liveMatches:'LIVE-SPIELE',
      matchProbTitle:'SPIELERGEBNIS-WAHRSCHEINLICHKEITEN',modelPrediction:'MODELLPROGNOSE',matchReadingTitle:'SPIELANALYSE',expectedGoals:'ERWARTETE TORE (xG)',dataQuality:'DATENQUALITÄT',strongestSignal:'STÄRKSTES SIGNAL',confidenceScore:'MODELLSICHERHEIT',noData:'Keine Daten',motivation:'MOTIVATION',firstHalfTitle:'ERSTE-HÄLFTE-ANALYSE',cornerPredictionTitle:'ECKBALLPROGNOSE',expectedMinCorner:'ERWARTETE MIN. ECKBÄLLE',over85Prob:'ÜBER 8,5 WAHRSCHEINLICHKEIT',standingsTitle:'TABELLE',teamStatsTitle:'TEAMSTATISTIK',last5Title:'LETZTE 5 SPIELE',h2hTitle:'DIREKTER VERGLEICH',marketOddsTitle:'MARKT & QUOTEN',notStartedStatus:'Nicht begonnen',
      usernameLabel:'BENUTZERNAME',loginBtn:'ANMELDEN',forgotLink:'Passwort vergessen?',registerSuccess:'Konto erstellt. Bitte bestätige deine E-Mail.',resetSent:'Link zum Zurücksetzen wurde gesendet.',connecting:'Verbindung...',fillFields:'Bitte alle Pflichtfelder ausfüllen.',
      statWinLbl:'GEWONNEN',statLossLbl:'VERLOREN',statPendingLbl:'OFFEN',filterAll:'ALLE',addNoteTitle:'AUSWAHL HINZUFÜGEN',selectionLabel:'AUSWAHL',noteLabel:'NOTIZ',cancel:'Abbrechen',won:'Gewonnen',pending:'Offen',lost:'Verloren'
    },
    fr: {
      brandSub:'INTELLIGENCE FOOTBALL PRO',loading:'Chargement...',navHome:'Accueil',navMatches:'Matchs',navResults:'Résultats',navNotes:'Mon coupon',navFav:'Favoris',
      today:"Aujourd’hui",live:'DIRECT',loadError:'Impossible de charger les données',legalText:'Les données et statistiques affichées sont fournies uniquement à titre informatif et ne constituent pas un conseil de pari. SoccerEdge Pro décline toute responsabilité pour les pertes liées à leur utilisation.<br><br>SoccerEdge Pro © 2026 — Développé par Eddas.',
      todayMatches:'MATCHS DU JOUR',quickAccess:'ACCÈS RAPIDE',seeAll:'Tout afficher',liveNow:'EN DIRECT',featuredMatch:'MATCH À LA UNE',featuredTab:'À la une',liveTab:'Direct',noLiveNow:"Aucun match n’est en direct",noMatchesToday:"Aucun match aujourd’hui",noMatchesDate:'Aucun match trouvé pour cette date',
      favoritesLabel:'MATCHS FAVORIS',emptyTitle:'Aucun favori',emptySub:"Touchez l’étoile (☆) d’un match",notStarted:'Non commencé',ft:'FIN',goal:'BUT',allLeagues:'Toutes les ligues',otherMatches:'MATCHS TERMINÉS',liveMatches:'MATCHS EN DIRECT',
      matchProbTitle:'PROBABILITÉS DU RÉSULTAT',modelPrediction:'PRÉVISION DU MODÈLE',matchReadingTitle:'ANALYSE DU MATCH',expectedGoals:'BUTS ATTENDUS (xG)',dataQuality:'QUALITÉ DES DONNÉES',strongestSignal:'SIGNAL LE PLUS FORT',confidenceScore:'CONFIANCE DU MODÈLE',noData:'Aucune donnée',motivation:'MOTIVATION',firstHalfTitle:'ANALYSE 1RE MI-TEMPS',cornerPredictionTitle:'PRÉVISION DES CORNERS',expectedMinCorner:'MIN. CORNERS ATTENDUS',over85Prob:'PROBABILITÉ +8,5',standingsTitle:'CLASSEMENT',teamStatsTitle:'STATISTIQUES ÉQUIPES',last5Title:'5 DERNIERS MATCHS',h2hTitle:'FACE-À-FACE',marketOddsTitle:'MARCHÉ & COTES',notStartedStatus:'Non commencé',
      usernameLabel:"NOM D’UTILISATEUR",loginBtn:'CONNEXION',forgotLink:'Mot de passe oublié ?',registerSuccess:'Compte créé. Vérifiez votre e-mail.',resetSent:'Lien de réinitialisation envoyé.',connecting:'Connexion...',fillFields:'Remplissez tous les champs obligatoires.',
      statWinLbl:'GAGNÉ',statLossLbl:'PERDU',statPendingLbl:'EN ATTENTE',filterAll:'TOUS',addNoteTitle:'AJOUTER UN CHOIX',selectionLabel:'CHOIX',noteLabel:'NOTE',cancel:'Annuler',won:'Gagné',pending:'En attente',lost:'Perdu'
    },
    es: {
      brandSub:'INTELIGENCIA DE FÚTBOL PRO',loading:'Cargando...',navHome:'Inicio',navMatches:'Partidos',navResults:'Resultados',navNotes:'Mi cupón',navFav:'Favoritos',
      today:'Hoy',live:'EN VIVO',loadError:'No se pudieron cargar los datos',legalText:'Los datos y estadísticas mostrados son solo informativos y no constituyen asesoramiento de apuestas. SoccerEdge Pro no se responsabiliza de pérdidas derivadas de su uso.<br><br>SoccerEdge Pro © 2026 — Desarrollado por Eddas.',
      todayMatches:'PARTIDOS DE HOY',quickAccess:'ACCESO RÁPIDO',seeAll:'Ver todos',liveNow:'EN VIVO AHORA',featuredMatch:'PARTIDO DESTACADO',featuredTab:'Destacado',liveTab:'En vivo',noLiveNow:'No hay partidos en vivo',noMatchesToday:'No hay partidos para hoy',noMatchesDate:'No hay partidos para esta fecha',
      favoritesLabel:'PARTIDOS FAVORITOS',emptyTitle:'Aún no hay favoritos',emptySub:'Toca la estrella (☆) de un partido',notStarted:'No iniciado',ft:'FIN',goal:'GOL',allLeagues:'Todas las ligas',otherMatches:'PARTIDOS FINALIZADOS',liveMatches:'PARTIDOS EN VIVO',
      matchProbTitle:'PROBABILIDADES DEL RESULTADO',modelPrediction:'PRONÓSTICO DEL MODELO',matchReadingTitle:'ANÁLISIS DEL PARTIDO',expectedGoals:'GOLES ESPERADOS (xG)',dataQuality:'CALIDAD DE DATOS',strongestSignal:'SEÑAL MÁS FUERTE',confidenceScore:'CONFIANZA DEL MODELO',noData:'Sin datos',motivation:'MOTIVACIÓN',firstHalfTitle:'ANÁLISIS 1.ª PARTE',cornerPredictionTitle:'PRONÓSTICO DE CÓRNERS',expectedMinCorner:'MÍN. CÓRNERS ESPERADOS',over85Prob:'PROBABILIDAD +8,5',standingsTitle:'CLASIFICACIÓN',teamStatsTitle:'ESTADÍSTICAS DE EQUIPO',last5Title:'ÚLTIMOS 5 PARTIDOS',h2hTitle:'ENFRENTAMIENTOS',marketOddsTitle:'MERCADO Y CUOTAS',notStartedStatus:'No iniciado',
      usernameLabel:'USUARIO',loginBtn:'INICIAR SESIÓN',forgotLink:'¿Olvidaste tu contraseña?',registerSuccess:'Cuenta creada. Verifica tu correo.',resetSent:'Enlace de restablecimiento enviado.',connecting:'Conectando...',fillFields:'Completa todos los campos obligatorios.',
      statWinLbl:'GANADO',statLossLbl:'PERDIDO',statPendingLbl:'PENDIENTE',filterAll:'TODOS',addNoteTitle:'AÑADIR SELECCIÓN',selectionLabel:'SELECCIÓN',noteLabel:'NOTA',cancel:'Cancelar',won:'Ganado',pending:'Pendiente',lost:'Perdido'
    },
    it: {
      brandSub:'INTELLIGENZA CALCISTICA PRO',loading:'Caricamento...',navHome:'Home',navMatches:'Partite',navResults:'Risultati',navNotes:'La mia schedina',navFav:'Preferiti',
      today:'Oggi',live:'LIVE',loadError:'Impossibile caricare i dati',legalText:'I dati e le statistiche mostrati sono solo a scopo informativo e non costituiscono consigli di scommessa. SoccerEdge Pro non è responsabile per perdite derivanti dal loro utilizzo.<br><br>SoccerEdge Pro © 2026 — Sviluppato da Eddas.',
      todayMatches:'PARTITE DI OGGI',quickAccess:'ACCESSO RAPIDO',seeAll:'Vedi tutte',liveNow:'LIVE ORA',featuredMatch:'PARTITA IN EVIDENZA',featuredTab:'In evidenza',liveTab:'Live',noLiveNow:'Nessuna partita in diretta',noMatchesToday:'Nessuna partita oggi',noMatchesDate:'Nessuna partita trovata per questa data',
      favoritesLabel:'PARTITE PREFERITE',emptyTitle:'Nessun preferito',emptySub:'Tocca la stella (☆) su una partita',notStarted:'Non iniziata',ft:'FIN',goal:'GOL',allLeagues:'Tutti i campionati',otherMatches:'PARTITE TERMINATE',liveMatches:'PARTITE LIVE',
      matchProbTitle:'PROBABILITÀ RISULTATO',modelPrediction:'PRONOSTICO DEL MODELLO',matchReadingTitle:'ANALISI PARTITA',expectedGoals:'GOL ATTESI (xG)',dataQuality:'QUALITÀ DEI DATI',strongestSignal:'SEGNALE PIÙ FORTE',confidenceScore:'AFFIDABILITÀ MODELLO',noData:'Nessun dato',motivation:'MOTIVAZIONE',firstHalfTitle:'ANALISI PRIMO TEMPO',cornerPredictionTitle:'PRONOSTICO CORNER',expectedMinCorner:'MIN. CORNER ATTESI',over85Prob:'PROBABILITÀ OVER 8,5',standingsTitle:'CLASSIFICA',teamStatsTitle:'STATISTICHE SQUADRE',last5Title:'ULTIME 5 PARTITE',h2hTitle:'SCONTRI DIRETTI',marketOddsTitle:'MERCATO & QUOTE',notStartedStatus:'Non iniziata',
      usernameLabel:'NOME UTENTE',loginBtn:'ACCEDI',forgotLink:'Password dimenticata?',registerSuccess:"Account creato. Verifica l’e-mail.",resetSent:'Link di ripristino inviato.',connecting:'Connessione...',fillFields:'Compila tutti i campi obbligatori.',
      statWinLbl:'VINTA',statLossLbl:'PERSA',statPendingLbl:'IN ATTESA',filterAll:'TUTTI',addNoteTitle:'AGGIUNGI SELEZIONE',selectionLabel:'SELEZIONE',noteLabel:'NOTA',cancel:'Annulla',won:'Vinta',pending:'In attesa',lost:'Persa'
    }
  };

  function extendTranslations(translations) {
    if (!translations || !translations.en) return;
    ['de', 'fr', 'es', 'it'].forEach(function (code) {
      translations[code] = Object.assign({}, translations.en, common[code]);
      if (typeof translations.en.matchCount === 'function') {
        translations[code].matchCount = function (n) {
          const words = { de: 'Spiele', fr: 'matchs', es: 'partidos', it: 'partite' };
          return n + ' ' + words[code];
        };
      }
      if (Array.isArray(translations.en.dowNames)) {
        translations[code].dowNames = {
          de:['So','Mo','Di','Mi','Do','Fr','Sa'],fr:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
          es:['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],it:['Dom','Lun','Mar','Mer','Gio','Ven','Sab']
        }[code];
      }
    });
  }

  function install() {
    if (typeof TRANSLATIONS === 'undefined') return;
    extendTranslations(TRANSLATIONS);

    let selected = localStorage.getItem('matchedge_lang') || 'en';
    if (!languages[selected]) selected = 'en';
    if (typeof currentLang !== 'undefined') currentLang = selected;

    const oldToggle = document.getElementById('langToggle');
    if (!oldToggle) return;
    const toggle = oldToggle.cloneNode(true); // removes the old two-language click listener
    oldToggle.replaceWith(toggle);

    const style = document.createElement('style');
    style.textContent = '.language-menu{position:fixed;z-index:9999;right:18px;top:76px;width:190px;padding:8px;background:#111827;border:1px solid #2b3850;border-radius:14px;box-shadow:0 16px 40px #0009;display:none}.language-menu.open{display:block}.language-option{display:flex;align-items:center;gap:10px;width:100%;padding:11px 12px;border:0;background:transparent;color:#f4f7fb;border-radius:9px;font:600 13px inherit;text-align:left}.language-option:hover,.language-option.active{background:#1d2a3e;color:#37d5c4}.language-option .code{margin-left:auto;color:#9aa8bc;font-size:11px}';
    document.head.appendChild(style);

    const menu = document.createElement('div');
    menu.className = 'language-menu';
    menu.setAttribute('role', 'menu');
    Object.keys(languages).forEach(function (code) {
      const item = languages[code];
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'language-option' + (code === selected ? ' active' : '');
      button.innerHTML = '<span>' + item.flag + '</span><span>' + item.name + '</span><span class="code">' + item.code + '</span>';
      button.addEventListener('click', function () {
        localStorage.setItem('matchedge_lang', code);
        window.location.reload();
      });
      menu.appendChild(button);
    });
    document.body.appendChild(menu);

    if (typeof applyStaticTranslations === 'function') applyStaticTranslations();
    const meta = languages[selected];
    const flag = toggle.querySelector('#langFlag');
    const code = toggle.querySelector('#langCode');
    if (flag) flag.textContent = meta.flag;
    if (code) code.textContent = meta.code;
    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      menu.classList.toggle('open');
    });
    document.addEventListener('click', function () { menu.classList.remove('open'); });
    document.documentElement.lang = selected;
  }

  window.SoccerEdgeI18n = { languages: languages, locale: code => (languages[code] || languages.en).locale };
  install();
})();
