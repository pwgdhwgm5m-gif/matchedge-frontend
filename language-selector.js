(function () {
  const languages = {
    en: { code: 'EN', flag: '🇬🇧', name: 'English', locale: 'en-GB' },
    tr: { code: 'TR', flag: '🇹🇷', name: 'Türkçe', locale: 'tr-TR' },
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


  const analysisExtra = {
    de: {
      couponTitle:'SCHEIN-AUSWAHL',addCoupon:'AUSWAHL ZUM SCHEIN HINZUFÜGEN',couponAdded:'Zum Schein hinzugefügt',couponError:'Schein konnte nicht hinzugefügt werden',
      liveData:'LIVE-DATEN',backToMatches:'Zurück zu den Spielen',edgeVerdict:'SOCCEREDGE-URTEIL',analysing:'ANALYSE LÄUFT',decisionLoading:'Quote, Stichprobe und Datenqualität werden geprüft…',
      selection:'Auswahl',model:'Modell',edge:'Vorteil',dataHealth:'Datenqualität',valueStatus:'WERT-AUSWAHL',pickStatus:'STÄRKSTE AUSWAHL',noBetStatus:'KEINE AUSWAHL',
      valueSub:'Die Modellwahrscheinlichkeit liegt deutlich über dem Markt und die Datengrenze ist erfüllt.',pickSub:'Die drei stärksten Optionen aus Ergebnis, Toren, Beide treffen und Ecken.',
      over25Pick:'ÜBER 2,5',under25Pick:'UNTER 2,5',bttsYesPick:'BEIDE TREFFEN: JA',bttsNoPick:'BEIDE TREFFEN: NEIN',cornerOverPick:'ÜBER 8,5 ECKEN',cornerUnderPick:'UNTER 8,5 ECKEN',
      noBetSub:'Für dieses Spiel konnte keine gültige Modellauswahl erstellt werden.',sourceOdds:'Marktquote',sourceTable:'Tabelle',sourceInjuries:'Kaderdaten',sourceSample:'5-Spiele-Stichprobe',
      home:'Heim',draw:'Unentschieden',away:'Auswärts',over25:'ÜBER 2,5 TORE',bttsYes:'BEIDE TREFFEN: JA',cornerOver:'ÜBER 8,5 ECKEN',mostGoalsHalf:'TORREICHSTE HÄLFTE',secondHalf:'Zweite Hälfte',
      veryHigh:'Sehr hoch',high:'Hoch',medium:'Mittel',low:'Niedrig',squadStatusTitle:'KADERSTATUS',noInfo:'Keine Angaben',noMissingPlayers:'Keine Ausfälle gemeldet',
      homeAwayFormTitle:'HEIM-/AUSWÄRTSFORM',atHomeLast5:'ZU HAUSE (LETZTE 5)',awayLast5:'AUSWÄRTS (LETZTE 5)',scoredLabel:'Erzielt: ',concededLabel:'Kassiert: ',
      streakRestTitle:'FORM & ERHOLUNG',oddsMovementTitle:'QUOTENBEWEGUNG (24 STD.)',oddsTrendWaiting:'Der Quotentrend erscheint, sobald genug Daten vorliegen',
      cornerDisclaimer:'Schätzung aus dem erwarteten Torgefälle; keine echte Eckenstatistik',standingsSub:'Gesamte Tabelle',standingsTeam:'Team',standingsPlayed:'Sp.',standingsGoalDiff:'Diff.',standingsPoints:'Pkt.',
      winStreak:'Siegesserie',lossStreak:'Niederlagenserie',noStreak:'Keine klare Serie',unknownLeague:'Liga unbekannt',noFixture:'Kein Spiel ausgewählt',noFixtureSub:'Gehe zurück und wähle ein Spiel aus'
    },
    fr: {
      couponTitle:'CHOIX DU COUPON',addCoupon:'AJOUTER LES CHOIX À MON COUPON',couponAdded:'Ajouté à mon coupon',couponError:"Impossible d’ajouter le coupon",
      liveData:'DONNÉES EN DIRECT',backToMatches:'Retour aux matchs',edgeVerdict:'VERDICT SOCCEREDGE',analysing:'ANALYSE EN COURS',decisionLoading:'Vérification des cotes, de l’échantillon et des données…',
      selection:'Choix',model:'Modèle',edge:'Avantage',dataHealth:'Qualité des données',valueStatus:'CHOIX DE VALEUR',pickStatus:'CHOIX LES PLUS FORTS',noBetStatus:'AUCUN CHOIX',
      valueSub:'La probabilité du modèle dépasse nettement celle du marché et le seuil de données est atteint.',pickSub:'Les trois meilleures options parmi résultat, buts, les deux équipes marquent et corners.',
      over25Pick:'PLUS DE 2,5',under25Pick:'MOINS DE 2,5',bttsYesPick:'LES DEUX MARQUENT : OUI',bttsNoPick:'LES DEUX MARQUENT : NON',cornerOverPick:'PLUS DE 8,5 CORNERS',cornerUnderPick:'MOINS DE 8,5 CORNERS',
      noBetSub:'Aucun choix de modèle valide n’a pu être produit.',sourceOdds:'Cotes du marché',sourceTable:'Classement',sourceInjuries:'Données effectif',sourceSample:'Échantillon de 5 matchs',
      home:'Domicile',draw:'Nul',away:'Extérieur',over25:'PLUS DE 2,5 BUTS',bttsYes:'LES DEUX MARQUENT : OUI',cornerOver:'PLUS DE 8,5 CORNERS',mostGoalsHalf:'MI-TEMPS LA PLUS RICHE EN BUTS',secondHalf:'Deuxième mi-temps',
      veryHigh:'Très élevée',high:'Élevée',medium:'Moyenne',low:'Faible',squadStatusTitle:"ÉTAT DE L’EFFECTIF",noInfo:'Aucune information',noMissingPlayers:'Aucune absence signalée',
      homeAwayFormTitle:'FORME DOMICILE / EXTÉRIEUR',atHomeLast5:'À DOMICILE (5 DERNIERS)',awayLast5:"À L’EXTÉRIEUR (5 DERNIERS)",scoredLabel:'Marqués : ',concededLabel:'Encaissés : ',
      streakRestTitle:'SÉRIE & REPOS',oddsMovementTitle:'ÉVOLUTION DES COTES (24 H)',oddsTrendWaiting:'La tendance apparaîtra lorsque les données seront suffisantes',
      cornerDisclaimer:'Estimation issue du rythme de buts attendu, pas de vraies statistiques de corners',standingsSub:'Classement complet',standingsTeam:'Équipe',standingsPlayed:'MJ',standingsGoalDiff:'Diff.',standingsPoints:'Pts',
      winStreak:'Série de victoires',lossStreak:'Série de défaites',noStreak:'Aucune série nette',unknownLeague:'Ligue inconnue',noFixture:'Aucun match sélectionné',noFixtureSub:'Revenez choisir un match à analyser'
    },
    es: {
      couponTitle:'SELECCIONES DEL CUPÓN',addCoupon:'AÑADIR SELECCIONES A MI CUPÓN',couponAdded:'Añadido a Mi Cupón',couponError:'No se pudo añadir el cupón',
      liveData:'DATOS EN VIVO',backToMatches:'Volver a partidos',edgeVerdict:'VEREDICTO SOCCEREDGE',analysing:'ANALIZANDO',decisionLoading:'Comprobando cuotas, muestra y calidad de datos…',
      selection:'Selección',model:'Modelo',edge:'Ventaja',dataHealth:'Calidad de datos',valueStatus:'SELECCIONES DE VALOR',pickStatus:'SELECCIONES MÁS FUERTES',noBetStatus:'SIN SELECCIÓN',
      valueSub:'La probabilidad del modelo supera claramente al mercado y se cumple el umbral de datos.',pickSub:'Las tres mejores opciones entre resultado, goles, ambos marcan y córners.',
      over25Pick:'MÁS DE 2,5',under25Pick:'MENOS DE 2,5',bttsYesPick:'AMBOS MARCAN: SÍ',bttsNoPick:'AMBOS MARCAN: NO',cornerOverPick:'MÁS DE 8,5 CÓRNERS',cornerUnderPick:'MENOS DE 8,5 CÓRNERS',
      noBetSub:'No se pudo generar una selección válida para este partido.',sourceOdds:'Cuotas de mercado',sourceTable:'Clasificación',sourceInjuries:'Datos de plantilla',sourceSample:'Muestra de 5 partidos',
      home:'Local',draw:'Empate',away:'Visitante',over25:'MÁS DE 2,5 GOLES',bttsYes:'AMBOS MARCAN: SÍ',cornerOver:'MÁS DE 8,5 CÓRNERS',mostGoalsHalf:'MITAD CON MÁS GOLES',secondHalf:'Segunda parte',
      veryHigh:'Muy alta',high:'Alta',medium:'Media',low:'Baja',squadStatusTitle:'ESTADO DE LA PLANTILLA',noInfo:'Sin información',noMissingPlayers:'No se informaron bajas',
      homeAwayFormTitle:'FORMA LOCAL / VISITANTE',atHomeLast5:'EN CASA (ÚLTIMOS 5)',awayLast5:'FUERA (ÚLTIMOS 5)',scoredLabel:'Marcados: ',concededLabel:'Recibidos: ',
      streakRestTitle:'RACHA Y DESCANSO',oddsMovementTitle:'MOVIMIENTO DE CUOTAS (24 H)',oddsTrendWaiting:'La tendencia aparecerá cuando haya suficientes datos',
      cornerDisclaimer:'Estimación basada en el ritmo esperado de goles; no son estadísticas reales de córners',standingsSub:'Tabla completa',standingsTeam:'Equipo',standingsPlayed:'PJ',standingsGoalDiff:'DG',standingsPoints:'Pts',
      winStreak:'Racha de victorias',lossStreak:'Racha de derrotas',noStreak:'Sin racha clara',unknownLeague:'Liga desconocida',noFixture:'Ningún partido seleccionado',noFixtureSub:'Vuelve y elige un partido para analizar'
    },
    it: {
      couponTitle:'SELEZIONI SCHEDINA',addCoupon:'AGGIUNGI LE SELEZIONI ALLA SCHEDINA',couponAdded:'Aggiunto alla schedina',couponError:'Impossibile aggiungere la schedina',
      liveData:'DATI LIVE',backToMatches:'Torna alle partite',edgeVerdict:'VERDETTO SOCCEREDGE',analysing:'ANALISI IN CORSO',decisionLoading:'Controllo quote, campione e qualità dati…',
      selection:'Selezione',model:'Modello',edge:'Vantaggio',dataHealth:'Qualità dati',valueStatus:'SELEZIONI DI VALORE',pickStatus:'SELEZIONI PIÙ FORTI',noBetStatus:'NESSUNA SELEZIONE',
      valueSub:'La probabilità del modello supera chiaramente il mercato e la soglia dati è soddisfatta.',pickSub:'Le tre opzioni migliori tra risultato, gol, entrambe segnano e corner.',
      over25Pick:'OVER 2,5',under25Pick:'UNDER 2,5',bttsYesPick:'GOL: SÌ',bttsNoPick:'GOL: NO',cornerOverPick:'OVER 8,5 CORNER',cornerUnderPick:'UNDER 8,5 CORNER',
      noBetSub:'Non è stato possibile produrre una selezione valida.',sourceOdds:'Quote di mercato',sourceTable:'Classifica',sourceInjuries:'Dati rosa',sourceSample:'Campione di 5 partite',
      home:'Casa',draw:'Pareggio',away:'Trasferta',over25:'OVER 2,5 GOL',bttsYes:'GOL: SÌ',cornerOver:'OVER 8,5 CORNER',mostGoalsHalf:'TEMPO CON PIÙ GOL',secondHalf:'Secondo tempo',
      veryHigh:'Molto alta',high:'Alta',medium:'Media',low:'Bassa',squadStatusTitle:'STATO ROSA',noInfo:'Nessuna informazione',noMissingPlayers:'Nessuna assenza segnalata',
      homeAwayFormTitle:'FORMA CASA / TRASFERTA',atHomeLast5:'IN CASA (ULTIME 5)',awayLast5:'IN TRASFERTA (ULTIME 5)',scoredLabel:'Segnati: ',concededLabel:'Subiti: ',
      streakRestTitle:'SERIE & RIPOSO',oddsMovementTitle:'MOVIMENTO QUOTE (24 ORE)',oddsTrendWaiting:'La tendenza apparirà quando ci saranno dati sufficienti',
      cornerDisclaimer:'Stima basata sul ritmo gol previsto; non sono statistiche reali dei corner',standingsSub:'Classifica completa',standingsTeam:'Squadra',standingsPlayed:'G',standingsGoalDiff:'DR',standingsPoints:'Pt',
      winStreak:'Serie di vittorie',lossStreak:'Serie di sconfitte',noStreak:'Nessuna serie chiara',unknownLeague:'Campionato sconosciuto',noFixture:'Nessuna partita selezionata',noFixtureSub:'Torna indietro e scegli una partita da analizzare'
    }
  };
  Object.keys(analysisExtra).forEach(function(code){ Object.assign(common[code], analysisExtra[code]); });

  const literalMaps = {
    en: {
      'Tribün Akışı':'Matchday Hub','AI analiz + topluluk sohbeti':'AI analysis + community chat','GÜVENLİ SOHBET':'SAFE CHAT','Maç yükleniyor…':'Loading match…',
      'Saygılı ol. Küfür, hakaret, tehdit, reklam ve iletişim bilgisi paylaşımı yasaktır.':'Be respectful. Abuse, threats, advertising and sharing contact information are prohibited.',
      'Kurallar':'Rules','Destek':'Support','Mesajlar yükleniyor…':'Loading messages…','Mesajlar otomatik filtrelerden geçer ve şikâyet üzerine incelenebilir. Kişisel bilgi paylaşma.':'Messages are automatically filtered and may be reviewed after reports. Do not share personal information.',
      'Gönder':'Send','Topluluk Kuralları':'Community Rules','Kabul Et ve Devam Et':'Accept and Continue','Kapat':'Close','Mesaj seçenekleri':'Message options','Mesajı Şikâyet Et':'Report Message','Kullanıcıyı Engelle':'Block User','Vazgeç':'Cancel',
      'Hakaret veya zorbalık':'Abuse or bullying','Spam veya reklam':'Spam or advertising','Nefret söylemi':'Hate speech','Uygunsuz/cinsel içerik':'Inappropriate/sexual content','Kişisel bilgi':'Personal information','Diğer':'Other',
      'SoccerEdge Pro Destek':'SoccerEdge Pro Support','Destek Talebi Gönder':'Send Support Request','Henüz analiz veya topluluk mesajı yok. İlk mesajı sen yaz.':'No analysis or community messages yet. Write the first message.',
      'KUPONUM':'MY COUPON','OTOMATİK KONTROL':'AUTOMATIC CHECK','Kontrol ediliyor…':'Checking…','BEKLİYOR':'PENDING','TUTTU':'WON','TUTMADI':'LOST','Kuponlar yükleniyor…':'Loading coupons…','Ana Sayfa':'Home','Maçlar':'Matches','Sonuçlar':'Results','Kuponum':'Coupon','Favoriler':'Favorites','Kuponu sil':'Delete coupon',
      'EDGE ARENA':'EDGE ARENA','GENEL SIRALAMA':'LEADERBOARD','SEÇİM YAP':'MAKE PICKS','Sıralama yükleniyor…':'Loading leaderboard…','Profil yükleniyor…':'Loading profile…','ⓘ Edge Coin kuralları':'ⓘ Edge Coin rules'
    },
    de: {
      'Tribün Akışı':'Spieltag-Hub','AI analiz + topluluk sohbeti':'KI-Analyse + Community-Chat','GÜVENLİ SOHBET':'SICHERER CHAT','Maç yükleniyor…':'Spiel wird geladen…','Kurallar':'Regeln','Destek':'Support','Mesajlar yükleniyor…':'Nachrichten werden geladen…','Gönder':'Senden','Topluluk Kuralları':'Community-Regeln','Kabul Et ve Devam Et':'Akzeptieren und fortfahren','Kapat':'Schließen','Mesaj seçenekleri':'Nachrichtenoptionen','Mesajı Şikâyet Et':'Nachricht melden','Kullanıcıyı Engelle':'Benutzer blockieren','Vazgeç':'Abbrechen',
      'KUPONUM':'MEIN SCHEIN','OTOMATİK KONTROL':'AUTOMATISCHE PRÜFUNG','Kontrol ediliyor…':'Wird geprüft…','BEKLİYOR':'OFFEN','TUTTU':'GEWONNEN','TUTMADI':'VERLOREN','Kuponlar yükleniyor…':'Scheine werden geladen…','Ana Sayfa':'Start','Maçlar':'Spiele','Sonuçlar':'Ergebnisse','Kuponum':'Mein Schein','Favoriler':'Favoriten','Kuponu sil':'Schein löschen',
      'GENEL SIRALAMA':'RANGLISTE','SEÇİM YAP':'TIPPS ABGEBEN','Sıralama yükleniyor…':'Rangliste wird geladen…','Profil yükleniyor…':'Profil wird geladen…','ⓘ Edge Coin kuralları':'ⓘ Edge-Coin-Regeln'
    },
    fr: {
      'Tribün Akışı':'Espace Match','AI analiz + topluluk sohbeti':'Analyse IA + chat communautaire','GÜVENLİ SOHBET':'CHAT SÉCURISÉ','Maç yükleniyor…':'Chargement du match…','Kurallar':'Règles','Destek':'Assistance','Mesajlar yükleniyor…':'Chargement des messages…','Gönder':'Envoyer','Topluluk Kuralları':'Règles de la communauté','Kabul Et ve Devam Et':'Accepter et continuer','Kapat':'Fermer','Mesaj seçenekleri':'Options du message','Mesajı Şikâyet Et':'Signaler le message','Kullanıcıyı Engelle':'Bloquer l’utilisateur','Vazgeç':'Annuler',
      'KUPONUM':'MON COUPON','OTOMATİK KONTROL':'VÉRIFICATION AUTOMATIQUE','Kontrol ediliyor…':'Vérification…','BEKLİYOR':'EN ATTENTE','TUTTU':'GAGNÉ','TUTMADI':'PERDU','Kuponlar yükleniyor…':'Chargement des coupons…','Ana Sayfa':'Accueil','Maçlar':'Matchs','Sonuçlar':'Résultats','Kuponum':'Mon coupon','Favoriler':'Favoris','Kuponu sil':'Supprimer le coupon',
      'GENEL SIRALAMA':'CLASSEMENT GÉNÉRAL','SEÇİM YAP':'FAIRE DES CHOIX','Sıralama yükleniyor…':'Chargement du classement…','Profil yükleniyor…':'Chargement du profil…','ⓘ Edge Coin kuralları':'ⓘ Règles Edge Coin'
    },
    es: {
      'Tribün Akışı':'Zona de Partido','AI analiz + topluluk sohbeti':'Análisis IA + chat comunitario','GÜVENLİ SOHBET':'CHAT SEGURO','Maç yükleniyor…':'Cargando partido…','Kurallar':'Reglas','Destek':'Soporte','Mesajlar yükleniyor…':'Cargando mensajes…','Gönder':'Enviar','Topluluk Kuralları':'Reglas de la comunidad','Kabul Et ve Devam Et':'Aceptar y continuar','Kapat':'Cerrar','Mesaj seçenekleri':'Opciones del mensaje','Mesajı Şikâyet Et':'Reportar mensaje','Kullanıcıyı Engelle':'Bloquear usuario','Vazgeç':'Cancelar',
      'KUPONUM':'MI CUPÓN','OTOMATİK KONTROL':'COMPROBACIÓN AUTOMÁTICA','Kontrol ediliyor…':'Comprobando…','BEKLİYOR':'PENDIENTE','TUTTU':'GANADO','TUTMADI':'PERDIDO','Kuponlar yükleniyor…':'Cargando cupones…','Ana Sayfa':'Inicio','Maçlar':'Partidos','Sonuçlar':'Resultados','Kuponum':'Mi cupón','Favoriler':'Favoritos','Kuponu sil':'Eliminar cupón',
      'GENEL SIRALAMA':'CLASIFICACIÓN GENERAL','SEÇİM YAP':'HACER SELECCIONES','Sıralama yükleniyor…':'Cargando clasificación…','Profil yükleniyor…':'Cargando perfil…','ⓘ Edge Coin kuralları':'ⓘ Reglas de Edge Coin'
    },
    it: {
      'Tribün Akışı':'Zona Partita','AI analiz + topluluk sohbeti':'Analisi IA + chat della community','GÜVENLİ SOHBET':'CHAT SICURA','Maç yükleniyor…':'Caricamento partita…','Kurallar':'Regole','Destek':'Supporto','Mesajlar yükleniyor…':'Caricamento messaggi…','Gönder':'Invia','Topluluk Kuralları':'Regole della community','Kabul Et ve Devam Et':'Accetta e continua','Kapat':'Chiudi','Mesaj seçenekleri':'Opzioni messaggio','Mesajı Şikâyet Et':'Segnala messaggio','Kullanıcıyı Engelle':'Blocca utente','Vazgeç':'Annulla',
      'KUPONUM':'LA MIA SCHEDINA','OTOMATİK KONTROL':'CONTROLLO AUTOMATICO','Kontrol ediliyor…':'Controllo…','BEKLİYOR':'IN ATTESA','TUTTU':'VINTA','TUTMADI':'PERSA','Kuponlar yükleniyor…':'Caricamento schedine…','Ana Sayfa':'Home','Maçlar':'Partite','Sonuçlar':'Risultati','Kuponum':'Schedina','Favoriler':'Preferiti','Kuponu sil':'Elimina schedina',
      'GENEL SIRALAMA':'CLASSIFICA GENERALE','SEÇİM YAP':'FAI LE SELEZIONI','Sıralama yükleniyor…':'Caricamento classifica…','Profil yükleniyor…':'Caricamento profilo…','ⓘ Edge Coin kuralları':'ⓘ Regole Edge Coin'
    }
  };


  const completeCopy = {
    en: {
      'Tribün Chat’nı kullanarak aşağıdaki kuralları kabul edersin:':'By using Matchday Chat, you agree to the following rules:',
      'Küfür, hakaret, nefret söylemi, tehdit ve zorbalık yasaktır.':'Profanity, abuse, hate speech, threats and bullying are prohibited.',
      'Cinsel içerik, reklam, spam, bağlantı ve iletişim bilgisi paylaşılamaz.':'Sexual content, advertising, spam, links and contact details may not be shared.',
      'Kişisel veri veya başka bir kullanıcıya ait özel bilgi yazılamaz.':'Do not post personal data or private information about another user.',
      'Kuralları ihlal eden mesajlar kaldırılabilir; hesap geçici veya kalıcı olarak sınırlandırılabilir.':'Messages that violate the rules may be removed and accounts may be restricted.',
      'Güvenlik, kullanıcı davranışı veya teknik bir sorun için bize uygulama içinden ulaşabilirsin.':'Contact us in the app about safety, user conduct or technical issues.',
      '10 Coin ile kupon yap · Kazan · Rank yükselt':'Create a coupon with 10 Coins · Win · Rise in rank',
      'Her kullanıcı 100 Coin ile başlar.':'Every user starts with 100 Coins.','Her kupon 10 Coin’dir ve en fazla 3 seçim içerir.':'Each coupon costs 10 Coins and contains up to 3 picks.',
      'Tutan kupon market katsayılarına göre 12–60 Coin kazandırır.':'A winning coupon awards 12–60 Coins based on market multipliers.','Başlayan maçlara kupon yapılamaz; aktif kupon silinemez.':'Started matches cannot be added; active coupons cannot be deleted.',
      'Günlük giriş ödülü yalnızca günde bir kez toplanır. Bir gün kaçırılırsa seri yeniden başlar.':'The daily reward can be claimed once per day. Missing a day resets the streak.','XP kalıcı rank puanıdır; Coin ise kuponlarda harcanır.':'XP is permanent rank progress; Coins are spent on coupons.',
      'Coin satın alınamaz, devredilemez, nakde veya gerçek ödüle çevrilemez.':'Coins cannot be bought, transferred, redeemed for cash or real prizes.',
      'Henüz kupon yok.':'No coupons yet.','Bir maç analizinden seçim yapabilirsin.':'Choose picks from a match analysis.','Şimdi güncellendi':'Updated now'
    },
    de: {
      'Tribün Chat’nı kullanarak aşağıdaki kuralları kabul edersin:':'Mit der Nutzung des Spieltag-Chats akzeptierst du diese Regeln:','Küfür, hakaret, nefret söylemi, tehdit ve zorbalık yasaktır.':'Beleidigungen, Hassrede, Drohungen und Mobbing sind verboten.','Cinsel içerik, reklam, spam, bağlantı ve iletişim bilgisi paylaşılamaz.':'Sexuelle Inhalte, Werbung, Spam, Links und Kontaktdaten sind verboten.','Kişisel veri veya başka bir kullanıcıya ait özel bilgi yazılamaz.':'Keine persönlichen oder privaten Daten anderer veröffentlichen.','Kuralları ihlal eden mesajlar kaldırılabilir; hesap geçici veya kalıcı olarak sınırlandırılabilir.':'Regelverstöße können entfernt und Konten eingeschränkt werden.',
      '10 Coin ile kupon yap · Kazan · Rank yükselt':'Schein mit 10 Coins · Gewinnen · Rang steigern','Her kullanıcı 100 Coin ile başlar.':'Jeder Nutzer startet mit 100 Coins.','Her kupon 10 Coin’dir ve en fazla 3 seçim içerir.':'Jeder Schein kostet 10 Coins und enthält bis zu 3 Tipps.','Tutan kupon market katsayılarına göre 12–60 Coin kazandırır.':'Ein Gewinnschein bringt je nach Markt 12–60 Coins.','Başlayan maçlara kupon yapılamaz; aktif kupon silinemez.':'Begonnene Spiele sind gesperrt; aktive Scheine können nicht gelöscht werden.','Günlük giriş ödülü yalnızca günde bir kez toplanır. Bir gün kaçırılırsa seri yeniden başlar.':'Die tägliche Belohnung gibt es einmal pro Tag; ein Fehltag setzt die Serie zurück.','XP kalıcı rank puanıdır; Coin ise kuponlarda harcanır.':'XP ist dauerhafter Rangfortschritt; Coins werden für Scheine verwendet.','Coin satın alınamaz, devredilemez, nakde veya gerçek ödüle çevrilemez.':'Coins sind nicht kaufbar, übertragbar oder in Geld bzw. echte Preise umtauschbar.','Henüz kupon yok.':'Noch keine Scheine.','Bir maç analizinden seçim yapabilirsin.':'Wähle Tipps in einer Spielanalyse.','Şimdi güncellendi':'Gerade aktualisiert'
    },
    fr: {
      'Tribün Chat’nı kullanarak aşağıdaki kuralları kabul edersin:':'En utilisant le chat du match, vous acceptez ces règles :','Küfür, hakaret, nefret söylemi, tehdit ve zorbalık yasaktır.':'Insultes, haine, menaces et harcèlement sont interdits.','Cinsel içerik, reklam, spam, bağlantı ve iletişim bilgisi paylaşılamaz.':'Contenu sexuel, publicité, spam, liens et coordonnées sont interdits.','Kişisel veri veya başka bir kullanıcıya ait özel bilgi yazılamaz.':'Ne publiez aucune donnée personnelle ou privée.','Kuralları ihlal eden mesajlar kaldırılabilir; hesap geçici veya kalıcı olarak sınırlandırılabilir.':'Les messages contraires aux règles peuvent être supprimés et les comptes limités.',
      '10 Coin ile kupon yap · Kazan · Rank yükselt':'Créez un coupon avec 10 Coins · Gagnez · Montez au classement','Her kullanıcı 100 Coin ile başlar.':'Chaque utilisateur commence avec 100 Coins.','Her kupon 10 Coin’dir ve en fazla 3 seçim içerir.':'Chaque coupon coûte 10 Coins et contient jusqu’à 3 choix.','Tutan kupon market katsayılarına göre 12–60 Coin kazandırır.':'Un coupon gagnant rapporte 12 à 60 Coins selon les coefficients.','Başlayan maçlara kupon yapılamaz; aktif kupon silinemez.':'Les matchs commencés sont bloqués et les coupons actifs ne peuvent être supprimés.','Günlük giriş ödülü yalnızca günde bir kez toplanır. Bir gün kaçırılırsa seri yeniden başlar.':'La récompense quotidienne se récupère une fois par jour ; un jour manqué réinitialise la série.','XP kalıcı rank puanıdır; Coin ise kuponlarda harcanır.':'Les XP déterminent le rang ; les Coins servent aux coupons.','Coin satın alınamaz, devredilemez, nakde veya gerçek ödüle çevrilemez.':'Les Coins ne peuvent être achetés, transférés ou convertis en argent ou récompenses.','Henüz kupon yok.':'Aucun coupon.','Bir maç analizinden seçim yapabilirsin.':'Choisissez depuis l’analyse d’un match.','Şimdi güncellendi':'Mis à jour'
    },
    es: {
      'Tribün Chat’nı kullanarak aşağıdaki kuralları kabul edersin:':'Al usar el chat del partido, aceptas estas reglas:','Küfür, hakaret, nefret söylemi, tehdit ve zorbalık yasaktır.':'Se prohíben insultos, odio, amenazas y acoso.','Cinsel içerik, reklam, spam, bağlantı ve iletişim bilgisi paylaşılamaz.':'No se permite contenido sexual, publicidad, spam, enlaces ni datos de contacto.','Kişisel veri veya başka bir kullanıcıya ait özel bilgi yazılamaz.':'No publiques datos personales ni información privada.','Kuralları ihlal eden mesajlar kaldırılabilir; hesap geçici veya kalıcı olarak sınırlandırılabilir.':'Los mensajes que incumplan las reglas podrán eliminarse y las cuentas limitarse.',
      '10 Coin ile kupon yap · Kazan · Rank yükselt':'Crea un cupón con 10 Coins · Gana · Sube de rango','Her kullanıcı 100 Coin ile başlar.':'Cada usuario empieza con 100 Coins.','Her kupon 10 Coin’dir ve en fazla 3 seçim içerir.':'Cada cupón cuesta 10 Coins e incluye hasta 3 selecciones.','Tutan kupon market katsayılarına göre 12–60 Coin kazandırır.':'Un cupón ganador otorga 12–60 Coins según los multiplicadores.','Başlayan maçlara kupon yapılamaz; aktif kupon silinemez.':'No se admiten partidos iniciados ni se pueden borrar cupones activos.','Günlük giriş ödülü yalnızca günde bir kez toplanır. Bir gün kaçırılırsa seri yeniden başlar.':'La recompensa diaria se recoge una vez al día; perder un día reinicia la racha.','XP kalıcı rank puanıdır; Coin ise kuponlarda harcanır.':'Los XP determinan el rango; los Coins se usan en cupones.','Coin satın alınamaz, devredilemez, nakde veya gerçek ödüle çevrilemez.':'Los Coins no se compran, transfieren ni convierten en dinero o premios.','Henüz kupon yok.':'Aún no hay cupones.','Bir maç analizinden seçim yapabilirsin.':'Elige selecciones desde el análisis del partido.','Şimdi güncellendi':'Actualizado ahora'
    },
    it: {
      'Tribün Chat’nı kullanarak aşağıdaki kuralları kabul edersin:':'Usando la chat della partita accetti queste regole:','Küfür, hakaret, nefret söylemi, tehdit ve zorbalık yasaktır.':'Sono vietati insulti, odio, minacce e bullismo.','Cinsel içerik, reklam, spam, bağlantı ve iletişim bilgisi paylaşılamaz.':'Sono vietati contenuti sessuali, pubblicità, spam, link e contatti.','Kişisel veri veya başka bir kullanıcıya ait özel bilgi yazılamaz.':'Non pubblicare dati personali o informazioni private.','Kuralları ihlal eden mesajlar kaldırılabilir; hesap geçici veya kalıcı olarak sınırlandırılabilir.':'I messaggi contrari alle regole possono essere rimossi e gli account limitati.',
      '10 Coin ile kupon yap · Kazan · Rank yükselt':'Crea una schedina con 10 Coin · Vinci · Sali di livello','Her kullanıcı 100 Coin ile başlar.':'Ogni utente inizia con 100 Coin.','Her kupon 10 Coin’dir ve en fazla 3 seçim içerir.':'Ogni schedina costa 10 Coin e contiene fino a 3 selezioni.','Tutan kupon market katsayılarına göre 12–60 Coin kazandırır.':'Una schedina vincente assegna 12–60 Coin in base ai moltiplicatori.','Başlayan maçlara kupon yapılamaz; aktif kupon silinemez.':'Le partite iniziate sono escluse e le schedine attive non si eliminano.','Günlük giriş ödülü yalnızca günde bir kez toplanır. Bir gün kaçırılırsa seri yeniden başlar.':'Il premio giornaliero si riscuote una volta al giorno; saltare un giorno azzera la serie.','XP kalıcı rank puanıdır; Coin ise kuponlarda harcanır.':'Gli XP determinano il livello; i Coin si usano nelle schedine.','Coin satın alınamaz, devredilemez, nakde veya gerçek ödüle çevrilemez.':'I Coin non possono essere acquistati, trasferiti o convertiti in denaro o premi.','Henüz kupon yok.':'Nessuna schedina.','Bir maç analizinden seçim yapabilirsin.':'Scegli dall’analisi di una partita.','Şimdi güncellendi':'Aggiornato ora'
    }
  };
  Object.keys(completeCopy).forEach(function(code){ Object.assign(literalMaps[code], completeCopy[code]); });

  literalMaps.tr = Object.assign({}, literalMaps.tr || {}, {
    'Matchday Hub':'Tribün Akışı','AI analysis + community chat':'Yapay zekâ analizi + topluluk sohbeti',
    'SAFE CHAT':'GÜVENLİ SOHBET','Loading match…':'Maç yükleniyor…','Rules':'Kurallar','Support':'Destek',
    'Loading messages…':'Mesajlar yükleniyor…','Send':'Gönder','Community Rules':'Topluluk Kuralları',
    'Accept and Continue':'Kabul Et ve Devam Et','Close':'Kapat','Message options':'Mesaj seçenekleri',
    'Report Message':'Mesajı Şikâyet Et','Block User':'Kullanıcıyı Engelle','Cancel':'Vazgeç',
    'MY COUPON':'KUPONUM','AUTOMATIC CHECK':'OTOMATİK KONTROL','Checking…':'Kontrol ediliyor…',
    'PENDING':'BEKLİYOR','WON':'TUTTU','LOST':'TUTMADI','Loading coupons…':'Kuponlar yükleniyor…',
    'Home':'Ana Sayfa','Matches':'Maçlar','Results':'Sonuçlar','Coupon':'Kuponum','Favorites':'Favoriler',
    'Delete coupon':'Kuponu sil','LEADERBOARD':'GENEL SIRALAMA','MAKE PICKS':'SEÇİM YAP',
    'Loading leaderboard…':'Sıralama yükleniyor…','Loading profile…':'Profil yükleniyor…',
    'Under 2.5':'2.5 Alt','Over 2.5':'2.5 Üst','UNDER 2.5':'2.5 ALT','OVER 2.5':'2.5 ÜST',
    'Under 8.5 Corners':'8.5 Alt Korner','Over 8.5 Corners':'8.5 Üst Korner',
    'UNDER 8.5 CORNERS':'8.5 ALT KORNER','OVER 8.5 CORNERS':'8.5 ÜST KORNER',
    'BTTS YES':'KG VAR','BTTS NO':'KG YOK','Corners':'Korner','CORNERS':'KORNER',
    'Data quality':'Veri kalitesi','Today':'Bugün','Upcoming':'Yakında','Top Predictions':'En Güçlü Seçimler','Values':'Değerli Seçimler'
  });
  Object.assign(literalMaps.en, {
    'KORNER':'CORNERS','Korner':'Corners','8.5 Alt Korner':'Under 8.5 Corners','8.5 Üst Korner':'Over 8.5 Corners',
    '2.5 Alt':'Under 2.5','2.5 Üst':'Over 2.5','2.5 ALT':'UNDER 2.5','2.5 ÜST':'OVER 2.5',
    'KG VAR':'BTTS YES','KG YOK':'BTTS NO','Veri kalitesi':'Data quality','Bugün':'Today',
    'Yakında':'Upcoming','En Güçlü Seçimler':'Top Predictions','Değerli Seçimler':'Value Picks',
    'Ana Ekran':'Home','Ana Sayfa':'Home','Skor':'Scores','Maçlar':'Matches','Favoriler':'Favorites','Kuponum':'Coupon','Kupon':'Coupon',
    'Dep':'Away','Ev':'Home','Deplasman':'Away','İç Saha':'Home','Bitti':'Finished','İY':'HT','MS':'FT',
    '9.5 Alt Korner':'Under 9.5 Corners','9.5 Üst Korner':'Over 9.5 Corners','9,5 Alt Korner':'Under 9.5 Corners','9,5 Üst Korner':'Over 9.5 Corners',
    '9.5 Alt Corners':'Under 9.5 Corners','9.5 Üst Corners':'Over 9.5 Corners','Alt Corners':'Under Corners','Üst Corners':'Over Corners',
    'Sıralamada yalnızca 250 XP ve üzerindeki kullanıcılar görünür. Coin bakiyen profilinde her zaman görünür.':'Only users with at least 250 XP appear on the leaderboard. Your Coin balance stays visible in your profile.',
    'Sıralama için 250 XP gerekli':'250 XP required to rank','Henüz 250 XP’ye ulaşan oyuncu yok.':'No players have reached 250 XP yet.',
    '10 Coin ile kupon yap · Kazan · Rank yükselt':'Build a coupon with 10 Coins · Win · Rank up',
    'SEN · İSABET':'YOU · ACCURACY','SOCCER EDGE MODELİ':'SOCCER EDGE MODEL',
    'Günlük Görev · 3 maçlık Slip':'Daily Mission · 3-match Slip','Farklı maçlardan en az 3 seçimle kupon oluştur.':'Create a coupon with at least 3 picks from different matches.',
    'Seri Avcısı':'Streak Hunter','Doğru seçim serini büyüt ve Arena rankını yükselt.':'Build your winning-pick streak and climb the Arena ranking.',
    'Doğru seçim serini büyüt ve Arena rankını yükselt.':'Build your correct-pick streak and climb the Arena ranking.',
    'Perfect Slip':'Perfect Slip','5+ maçlık bir kuponun tamamını doğru bil.':'Get every pick right on a coupon with 5+ matches.',
    'HAFTALIK CHALLENGE':'WEEKLY CHALLENGE','Toplam seçim':'Total picks',
    'Edge Coin kuralları':'Edge Coin rules','Her kullanıcı 100 Coin ile başlar.':'Every user starts with 100 Coins.',
    'Her kupon 10 Coin’dir ve en fazla 3 seçim içerir.':'Each coupon costs 10 Coins and can contain up to 3 picks.',
    'Her kupon 10 Coin’dir ve en fazla 8 seçim içerir.':'Each coupon costs 10 Coins and can contain up to 8 picks.',
    'Kuponlarda 10, 20 veya 50 Coin kullanılabilir ve farklı maçlardan en fazla 8 seçim eklenebilir.':'Coupons can use 10, 20 or 50 Coins and include up to 8 picks from different matches.',
    'Tutan kupon model olasılıklarından oluşan oyun çarpanına göre Edge Coin kazandırır.':'A winning coupon earns Edge Coins based on the game multiplier derived from model probabilities.',
    'Başlayan maçlara kupon yapılamaz; aktif kupon silinemez.':'Started matches cannot be added to coupons; active coupons cannot be deleted.',
    'Günlük giriş ödülü yalnızca günde bir kez toplanır. Bir gün kaçırılırsa seri yeniden başlar.':'The daily login reward can be claimed once per day. Missing a day resets the streak.',
    'XP kalıcı rank puanıdır; Coin ise kuponlarda harcanır.':'XP is permanent rank progress; Coins are spent on coupons.',
    'Coin satın alınamaz, devredilemez, nakde veya gerçek ödüle çevrilemez.':'Coins cannot be purchased, transferred, redeemed for cash or converted into real prizes.',
    'GENEL SIRALAMA':'LEADERBOARD','SEÇİM YAP':'MAKE PICKS','Profil yükleniyor…':'Loading profile…','Sıralama yükleniyor…':'Loading leaderboard…',
    'Çaylak':'Rookie','Acemi':'Beginner','Amatör':'Amateur','Yükselen':'Rising Star','Usta':'Expert','Uzman':'Expert','Profesyonel':'Pro','Şampiyon':'Champion','Efsane':'Legend','Elit':'Elite',
    'Genel sıralama #':'Leaderboard #','BUGÜN ALINDI':'CLAIMED TODAY','GÜNLÜK COIN TOPLA':'CLAIM DAILY COINS',
    'Ödül alınamadı':'Reward could not be claimed','Yüklenemedi':'Could not load',
    'Kupon':'Coupon','İsabet':'Accuracy','isabet':'accuracy',
    'SoccerEdge Pro analizleri ve Edge Coin yalnızca bilgi ve eğlence amaçlıdır; bahis tavsiyesi değildir. Veriler gecikebilir veya eksik olabilir. 18 yaş altı bahis amaçlı kullanım için uygun değildir.':'SoccerEdge Pro analyses and Edge Coin are for information and entertainment only; they are not betting advice. Data may be delayed or incomplete. Not intended for betting use by anyone under 18.',
    'Tüm hakları saklıdır. Tasarım, yazılım ve içerikler izinsiz kopyalanamaz.':'All rights reserved. Design, software and content may not be copied without permission.',
  });

  function translateDocument(code) {
    const map = literalMaps[code] || literalMaps.en;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const parent = walker.currentNode.parentElement;
      if (parent && !/^(SCRIPT|STYLE|TEXTAREA|OPTION)$/.test(parent.tagName)) nodes.push(walker.currentNode);
    }
    nodes.forEach(function(node) {
      const raw = node.nodeValue;
      let translated = raw;
      Object.keys(map).sort(function(a,b){ return b.length-a.length; }).forEach(function(source) {
        if (translated.includes(source)) translated = translated.split(source).join(map[source]);
      });
      if (translated !== raw) node.nodeValue = translated;
    });
  }

  function extendTranslations(translations) {
    if (!translations || !translations.en) return;
    ['de', 'fr', 'es', 'it'].forEach(function (code) {
      translations[code] = Object.assign({}, translations.en, common[code], analysisExtra[code] || {});
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

  function installResponsiveCompatibility() {
    const style = document.createElement('style');
    style.id = 'socceredge-cross-browser-mobile';
    style.textContent = `
      html{-webkit-text-size-adjust:100%;text-size-adjust:100%}
      *,*::before,*::after{box-sizing:border-box}
      img,svg,canvas{max-width:100%}
      body{max-width:100vw;overflow-x:hidden}
      input,button,select,textarea{font:inherit}
      .se-bottom-nav{padding-bottom:max(7px,env(safe-area-inset-bottom,0px))}
      .se-bottom-nav a{min-width:0}
      @media(max-width:600px){
        body{padding-bottom:calc(88px + env(safe-area-inset-bottom,0px))!important}
        .container,.page,.page-wrap,.main,.main-content{max-width:100%!important}
        .featured-card,.match-card,.card,.panel{max-width:100%!important}
        .featured-teams,.match-row-teams,.team-name{overflow-wrap:anywhere;word-break:normal}
        .featured-scroll,.top-picks-scroll{-webkit-overflow-scrolling:touch}
        .se-bottom-nav{left:0!important;right:0!important;bottom:0!important;width:100%!important;border-radius:0!important}
        .se-bottom-nav a{font-size:9px!important;line-height:1.08!important;overflow:hidden}
        .se-bottom-nav a span{max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      }
      @supports(padding:max(0px)){
        .se-bottom-nav{padding-bottom:max(7px,env(safe-area-inset-bottom,0px))}
      }
    `;
    document.head.appendChild(style);
  }

  function install() {
    if (typeof TRANSLATIONS !== 'undefined') extendTranslations(TRANSLATIONS);

    let selected = localStorage.getItem('matchedge_lang') || 'en';
    if (!languages[selected]) selected = 'en';
    if (typeof currentLang !== 'undefined') currentLang = selected;

    let oldToggle = document.getElementById('langToggle');
    if (!oldToggle) {
      oldToggle = document.createElement('button');
      oldToggle.id = 'langToggle';
      oldToggle.type = 'button';
      oldToggle.innerHTML = '<span id="langFlag"></span> <span id="langCode"></span>';
      oldToggle.style.cssText = 'position:fixed;right:14px;top:14px;z-index:9998;border:1px solid #2b3850;background:#111827;color:#f4f7fb;border-radius:11px;padding:9px 11px;font-weight:800';
      document.body.appendChild(oldToggle);
    }
    const toggle = oldToggle.cloneNode(true);
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
    translateDocument(selected);
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
    const observer = new MutationObserver(function(){ translateDocument(selected); });
    observer.observe(document.body, { childList:true, subtree:true });
  }

  function installLegalFooter() {
    if (location.pathname.endsWith('/privacy-legal.html')) return;
    document.querySelectorAll('.legal-footer').forEach(function(el){ el.style.display = 'none'; });
    const isTr = (localStorage.getItem('matchedge_lang') || 'en') === 'tr';
    const footer = document.createElement('footer');
    footer.className = 'global-legal-footer';
    footer.innerHTML =
      '<div class="global-legal-links">' +
      '<a href="privacy-legal.html#privacy">' + (isTr ? 'Gizlilik Politikası' : 'Privacy Policy') + '</a>' +
      '<a href="privacy-legal.html#legal">' + (isTr ? 'Yasal Uyarı' : 'Legal Notice') + '</a>' +
      '</div><div class="global-legal-copy">SoccerEdge Pro © 2026 · ' +
      (isTr ? 'Tüm hakları saklıdır.' : 'All rights reserved.') + '</div>';
    const style = document.createElement('style');
    style.textContent = '.global-legal-footer{max-width:480px;margin:24px auto 92px;padding:14px 16px;text-align:center;color:#6b7386;font-size:9px}.global-legal-links{display:flex;justify-content:center;gap:8px;margin-bottom:9px}.global-legal-links a{display:inline-flex;padding:8px 11px;border:1px solid #263249;border-radius:9px;background:#121826;color:#a8b0c2;text-decoration:none;font-weight:800;font-size:10px}.global-legal-copy{line-height:1.5}';
    document.head.appendChild(style);
    document.body.appendChild(footer);
  }


  function urlBase64ToUint8Array(base64String){
    const padding='='.repeat((4-base64String.length%4)%4);
    const base64=(base64String+padding).replace(/-/g,'+').replace(/_/g,'/');
    const raw=atob(base64);return Uint8Array.from([...raw].map(ch=>ch.charCodeAt(0)));
  }
  async function setPushEnabled(enabled){
    const token=localStorage.getItem('matchedge_token');
    if(!token||!('serviceWorker' in navigator)||!('PushManager' in window))return false;
    const reg=await navigator.serviceWorker.register('/sw.js');
    await navigator.serviceWorker.ready;
    if(enabled){
      const permission=await Notification.requestPermission();
      if(permission!=='granted')return false;
      let sub=await reg.pushManager.getSubscription();
      if(!sub){
        const kr=await fetch('https://matchedge-backend-kujb.onrender.com/api/push/public-key');
        const kd=await kr.json(); if(!kd.publicKey)return false;
        sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array(kd.publicKey)});
      }
      await fetch('https://matchedge-backend-kujb.onrender.com/api/push/subscribe',{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({subscription:sub.toJSON()})});
      return true;
    }
    const sub=await reg.pushManager.getSubscription();
    if(sub){
      await fetch('https://matchedge-backend-kujb.onrender.com/api/push/unsubscribe',{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({endpoint:sub.endpoint})}).catch(()=>{});
      await sub.unsubscribe();
    }
    return true;
  }
  window.SoccerEdgePush={setEnabled:setPushEnabled};
  if(!document.querySelector('link[rel="manifest"]')){
    const manifest=document.createElement('link');manifest.rel='manifest';manifest.href='/manifest.json';document.head.appendChild(manifest);
  }
  const matchBell=document.getElementById('notificationBtn');
  if(matchBell){
    const pushBell=matchBell.cloneNode(true);matchBell.replaceWith(pushBell);
    const paint=()=>{const on=localStorage.getItem('socceredge_match_notifications')==='on';pushBell.textContent=on?'🔔':'🔕';pushBell.classList.toggle('notification-on',on);pushBell.setAttribute('aria-pressed',String(on))};
    pushBell.addEventListener('click',async()=>{
      const on=localStorage.getItem('socceredge_match_notifications')==='on';pushBell.disabled=true;
      try{const ok=await setPushEnabled(!on);if(ok)localStorage.setItem('socceredge_match_notifications',on?'off':'on')}catch(e){console.warn('Push setup failed',e.message)}
      pushBell.disabled=false;paint();
    });
    paint();
  }


  function installGoalNotifications(){
    const token=localStorage.getItem('matchedge_token');
    if(!token) return;
    const API='https://matchedge-backend-kujb.onrender.com';
    const scoreKey='socceredge_goal_scores_v1';
    let previous={}; try{previous=JSON.parse(sessionStorage.getItem(scoreKey)||'{}')}catch(_){previous={}}

    const style=document.createElement('style');
    style.textContent='.se-goal-toast{display:none;position:fixed;top:max(12px,env(safe-area-inset-top));left:50%;transform:translate(-50%,-145%);width:min(430px,calc(100% - 24px));z-index:100001;background:linear-gradient(135deg,#0b2b59,#0b1d3b);border:1px solid #f2c94c;border-radius:15px;padding:12px 14px;box-shadow:0 14px 38px #000a;color:#fff;transition:transform .28s ease;pointer-events:none}.se-goal-toast.show{display:block;transform:translate(-50%,0)}.se-goal-toast b{display:block;color:#f2c94c;font-size:13px;letter-spacing:.5px}.se-goal-toast span{display:block;font-size:15px;font-weight:800;margin-top:4px}';
    document.head.appendChild(style);
    const toast=document.createElement('div');toast.className='se-goal-toast';document.body.appendChild(toast);
    let toastTimer=null,audioCtx=null;

    function sound(){
      if(localStorage.getItem('socceredge_match_notifications')!=='on')return;
      try{
        audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();
        if(audioCtx.state==='suspended')audioCtx.resume();
        const now=audioCtx.currentTime;
        [[659.25,0,.13],[783.99,.12,.15],[987.77,.25,.24]].forEach(([freq,delay,dur])=>{
          const o=audioCtx.createOscillator(),g=audioCtx.createGain();
          o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(.0001,now+delay);g.gain.exponentialRampToValueAtTime(.16,now+delay+.018);g.gain.exponentialRampToValueAtTime(.0001,now+delay+dur);
          o.connect(g);g.connect(audioCtx.destination);o.start(now+delay);o.stop(now+delay+dur+.03);
        });
      }catch(_){}
    }
    function showGoal(m){
      const tr=(localStorage.getItem('matchedge_lang')||'en')==='tr';
      toast.innerHTML='<b>⚽ '+(tr?'GOL!':'GOAL!')+'</b><span>'+escapeHtml(m.homeTeam)+' '+Number(m.homeScore||0)+' – '+Number(m.awayScore||0)+' '+escapeHtml(m.awayTeam)+'</span>';
      toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),5200);sound();
      if('Notification' in window&&Notification.permission==='granted'&&document.hidden){
        try{new Notification('SoccerEdge Pro · '+(tr?'GOL!':'GOAL!'),{body:m.homeTeam+' '+Number(m.homeScore||0)+' – '+Number(m.awayScore||0)+' '+m.awayTeam})}catch(_){}
      }
    }
    function escapeHtml(v){return String(v||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
    async function getTracked(){
      const h={Authorization:'Bearer '+token};
      const [fr,cr]=await Promise.all([fetch(API+'/api/favorites',{headers:h}),fetch(API+'/api/coupons',{headers:h})]);
      const fav=fr.ok?(await fr.json()).favorites||[]:[];
      const cps=cr.ok?(await cr.json()).coupons||[]:[];
      const map=new Map();
      fav.forEach(x=>map.set(String(x.fixtureId),{fixtureId:String(x.fixtureId),homeTeam:x.homeTeam,awayTeam:x.awayTeam}));
      cps.filter(x=>x.status==='pending').forEach(cp=>{
        (cp.legs||[]).forEach(l=>map.set(String(l.fixtureId),{fixtureId:String(l.fixtureId),homeTeam:l.homeTeam,awayTeam:l.awayTeam}));
        if(!cp.legs?.length&&cp.fixtureId)map.set(String(cp.fixtureId),{fixtureId:String(cp.fixtureId),homeTeam:cp.homeTeam,awayTeam:cp.awayTeam});
      });
      return [...map.values()];
    }
    async function poll(){
      if(localStorage.getItem('socceredge_match_notifications')!=='on')return;
      try{
        const tracked=await getTracked(); if(!tracked.length)return;
        const live=await Promise.all(tracked.map(async m=>{try{const r=await fetch(API+'/api/live/'+encodeURIComponent(m.fixtureId));if(!r.ok)return null;return {...m,...await r.json()}}catch(_){return null}}));
        for(const m of live.filter(Boolean)){
          const id=String(m.fixtureId),hs=Number(m.homeScore||0),as=Number(m.awayScore||0),total=hs+as;
          const old=previous[id];
          if(old&&total>Number(old.total||0))showGoal({...m,homeScore:hs,awayScore:as});
          previous[id]={home:hs,away:as,total};
        }
        sessionStorage.setItem(scoreKey,JSON.stringify(previous));
      }catch(_){}
    }
    poll();setInterval(poll,20000);
  }

  function installMessageNotifications(){
    const token=localStorage.getItem('matchedge_token'); if(!token||location.pathname.endsWith('/mesajlar.html'))return;
    const API='https://matchedge-backend-kujb.onrender.com',seenKey='socceredge_seen_dm';
    let seen=new Set(JSON.parse(sessionStorage.getItem(seenKey)||'[]'));
    const style=document.createElement('style');style.textContent='.se-dm-toast{display:none;position:fixed;top:max(12px,env(safe-area-inset-top));left:50%;transform:translate(-50%,-130%);width:min(440px,calc(100% - 24px));z-index:100000;background:#0b2b59;border:1px solid #f2c94c;border-radius:13px;padding:11px 13px;box-shadow:0 12px 32px #0009;color:#fff;transition:transform .25s;cursor:pointer}.se-dm-toast.show{display:block;transform:translate(-50%,0)}.se-dm-toast b{display:block;font-size:11px;color:#f2c94c}.se-dm-toast span{display:block;font-size:12px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}';document.head.appendChild(style);
    const box=document.createElement('div');box.className='se-dm-toast';document.body.appendChild(box);
    async function poll(){try{const r=await fetch(API+'/api/messages/unread',{headers:{Authorization:'Bearer '+token}});if(!r.ok)return;const d=await r.json(),m=(d.unread||[]).find(x=>!seen.has(String(x.id)));if(!m)return;seen.add(String(m.id));sessionStorage.setItem(seenKey,JSON.stringify([...seen].slice(-100)));box.innerHTML='<b>💬 SoccerEdge · '+((localStorage.getItem('matchedge_lang')||'en')==='tr'?'Yeni Mesaj':'New Message')+' · '+String(m.senderName).replace(/[<>&]/g,'')+'</b><span>'+String(m.text).replace(/[<>&]/g,'')+'</span>';box.onclick=()=>location.href='mesajlar.html?user='+encodeURIComponent(m.senderId);box.classList.add('show');setTimeout(()=>box.classList.remove('show'),6000)}catch(e){}}
    poll();setInterval(poll,7000);
  }

  window.SoccerEdgeI18n = { languages: languages, locale: code => (languages[code] || languages.en).locale };
  installResponsiveCompatibility();
  install();
  installLegalFooter();
  installMessageNotifications();
  installGoalNotifications();
})();
