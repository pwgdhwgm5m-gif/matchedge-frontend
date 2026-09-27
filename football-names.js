// Presentation names only. Provider IDs, team identity, search links and saved
// favorites continue to use the original API names.
(function(root){
  const leagueNames={
    'england-premier-league':'İngiltere Premier Lig',
    'spain-la-liga':'İspanya La Liga',
    'italy-serie-a':'İtalya Serie A',
    'germany-bundesliga':'Almanya Bundesliga',
    'france-ligue-1':'Fransa Ligue 1',
    'turkey-super-lig':'Türkiye Süper Lig',
    'portugal-primeira-liga':'Portekiz Primeira Liga',
    'netherlands-eredivisie':'Hollanda Eredivisie',
    'netherlands-eerste-divisie':'Hollanda Eerste Divisie',
    'belgium-pro-league':'Belçika Pro League',
    'greece-super-league':'Yunanistan Süper Lig',
    'scotland-premiership':'İskoçya Premiership',
    'czechia-first-league':'Çekya Birinci Ligi',
    'poland-ekstraklasa':'Polonya Ekstraklasa',
    'austria-bundesliga':'Avusturya Bundesliga',
    'switzerland-super-league':'İsviçre Süper Lig',
    'denmark-superliga':'Danimarka Süper Ligi',
    'norway-eliteserien':'Norveç Eliteserien',
    'sweden-allsvenskan':'İsveç Allsvenskan',
    'romania-superliga':'Romanya Süper Ligi',
    'croatia-hnl':'Hırvatistan HNL',
    'serbia-superliga':'Sırbistan Süper Ligi',
    'ukraine-premier-league':'Ukrayna Premier Lig',
    'russia-premier-league':'Rusya Premier Lig',
    'hungary-nb-i':'Macaristan NB I',
    'finland-veikkausliiga':'Finlandiya Veikkausliiga',
    'ireland-premier-division':'İrlanda Premier Division',
    'usa-mls':'ABD MLS',
    'mexico-liga-mx':'Meksika Liga MX',
    'brazil-serie-a':'Brezilya Serie A',
    'argentina-primera-division':'Arjantin Primera División',
    'japan-j1-league':'Japonya J1 Ligi',
    'south-korea-k-league-1':'Güney Kore K League 1',
    'china-super-league':'Çin Süper Ligi',
    'australia-a-league-men':'Avustralya A-League',
    'uefa-champions-league':'UEFA Şampiyonlar Ligi',
    'uefa-europa-league':'UEFA Avrupa Ligi',
    'uefa-conference-league':'UEFA Konferans Ligi',
    'uefa-nations-league':'UEFA Uluslar Ligi',
    'uefa-super-cup':'UEFA Süper Kupa',
    'england-fa-cup':'İngiltere FA Kupası',
    'copa-libertadores':'Copa Libertadores',
    'fifa-club-world-cup':'FIFA Kulüpler Dünya Kupası',
    'germany-super-cup':'Almanya Süper Kupası',
    'spain-copa-del-rey':'İspanya Kral Kupası',
    'france-coupe-de-france':'Fransa Kupası',
    'germany-dfb-pokal':'Almanya Kupası',
    'italy-coppa-italia':'İtalya Kupası',
    'england-efl-cup':'İngiltere Lig Kupası',
    'portugal-taca-de-portugal':'Portekiz Kupası',
    'netherlands-knvb-beker':'Hollanda Kupası',
    'turkey-turkish-cup':'Türkiye Kupası',
    'belgium-cup':'Belçika Kupası',
    'greece-cup':'Yunanistan Kupası',
    'scotland-cup':'İskoçya Kupası',
    'switzerland-cup':'İsviçre Kupası',
    'austria-cup':'Avusturya Kupası',
    'norway-cup':'Norveç Kupası',
    'sweden-cup':'İsveç Kupası',
    'poland-cup':'Polonya Kupası',
    'russia-cup':'Rusya Kupası',
    'usa-us-open-cup':'ABD Açık Kupası',
    'japan-emperors-cup':'Japonya İmparatorluk Kupası',
    'south-korea-korea-cup':'Güney Kore Kupası',
    'china-fa-cup':'Çin FA Kupası',
    'australia-cup':'Avustralya Kupası'
  };
  const teams={
    'Turkey':'Türkiye','Türkiye':'Türkiye','Turkiye':'Türkiye',
    'England':'İngiltere','Scotland':'İskoçya','Wales':'Galler',
    'Northern Ireland':'Kuzey İrlanda','Ireland':'İrlanda','Republic of Ireland':'İrlanda',
    'Netherlands':'Hollanda','Holland':'Hollanda','Germany':'Almanya','France':'Fransa',
    'Spain':'İspanya','Italy':'İtalya','Portugal':'Portekiz','Belgium':'Belçika',
    'Switzerland':'İsviçre','Austria':'Avusturya','Denmark':'Danimarka',
    'Norway':'Norveç','Sweden':'İsveç','Finland':'Finlandiya','Iceland':'İzlanda',
    'Poland':'Polonya','Czechia':'Çekya','Czech Republic':'Çekya','Slovakia':'Slovakya',
    'Hungary':'Macaristan','Romania':'Romanya','Bulgaria':'Bulgaristan',
    'Croatia':'Hırvatistan','Serbia':'Sırbistan','Slovenia':'Slovenya',
    'Bosnia and Herzegovina':'Bosna Hersek','Bosnia-Herzegovina':'Bosna Hersek',
    'Montenegro':'Karadağ','North Macedonia':'Kuzey Makedonya','Albania':'Arnavutluk',
    'Kosovo':'Kosova','Greece':'Yunanistan','Cyprus':'Kıbrıs','Malta':'Malta',
    'Ukraine':'Ukrayna','Russia':'Rusya','Belarus':'Belarus','Moldova':'Moldova',
    'Georgia':'Gürcistan','Armenia':'Ermenistan','Azerbaijan':'Azerbaycan',
    'Kazakhstan':'Kazakistan','Israel':'İsrail','Estonia':'Estonya',
    'Latvia':'Letonya','Lithuania':'Litvanya','Luxembourg':'Lüksemburg',
    'Andorra':'Andorra','San Marino':'San Marino','Faroe Islands':'Faroe Adaları',
    'Gibraltar':'Cebelitarık','Liechtenstein':'Lihtenştayn',
    'United States':'ABD','USA':'ABD','United States of America':'ABD',
    'Canada':'Kanada','Mexico':'Meksika','Brazil':'Brezilya','Argentina':'Arjantin',
    'Japan':'Japonya','South Korea':'Güney Kore','Korea Republic':'Güney Kore',
    'China':'Çin','Australia':'Avustralya',
    'Bayern Munich':'Bayern Münih','FC Bayern Munich':'Bayern Münih',
    'Bayern München':'Bayern Münih','Inter Milan':'Inter',
    'FC Copenhagen':'Kopenhag','FC København':'Kopenhag',
    'Red Star Belgrade':'Kızılyıldız','Sparta Prague':'Sparta Prag',
    'Slavia Prague':'Slavia Prag','Dynamo Kyiv':'Dinamo Kiev'
  };
  const normalized=value=>String(value||'').trim().toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'');
  const teamAliases=new Map(Object.entries(teams).map(([name,tr])=>[normalized(name),tr]));
  const leagueAliases=new Map([
    ['UEFA Nations League','uefa-nations-league'],['Nations League','uefa-nations-league'],
    ['UEFA Champions League','uefa-champions-league'],['UEFA Europa League','uefa-europa-league'],
    ['UEFA Conference League','uefa-conference-league'],
    ['American Major League Soccer','usa-mls'],['MLS','usa-mls'],
    ['South Korea K League 1','south-korea-k-league-1'],
    ['Netherlands Eerste Divisie','netherlands-eerste-divisie'],
    ['Turkey Süper Lig','turkey-super-lig'],
    ['England Premier League','england-premier-league'],['Premier League','england-premier-league'],
    ['Spain La Liga','spain-la-liga'],['La Liga','spain-la-liga'],
    ['Italy Serie A','italy-serie-a'],['Serie A','italy-serie-a'],
    ['Germany Bundesliga','germany-bundesliga'],['Bundesliga','germany-bundesliga'],
    ['France Ligue 1','france-ligue-1'],['Ligue 1','france-ligue-1'],
    ['Süper Lig','turkey-super-lig'],['Eredivisie','netherlands-eredivisie'],
    ['Japan J1 League','japan-j1-league'],['China Chinese Super League','china-super-league'],
    ['Australia A-League Men','australia-a-league-men']
  ].map(([name,key])=>[normalized(name),key]));
  function league(name,key,lang){
    const raw=String(name||'');
    if(lang!=='tr')return raw;
    return leagueNames[key]||leagueNames[leagueAliases.get(normalized(raw))]||raw;
  }
  function team(name,lang){
    const raw=String(name||'');
    if(lang!=='tr')return raw;
    const direct=teamAliases.get(normalized(raw));
    if(direct)return direct;
    const suffix=raw.match(/^(.*?)\s+(U(?:17|19|20|21|23)|Women)$/i);
    if(suffix){
      const base=teamAliases.get(normalized(suffix[1]));
      if(base)return base+' '+(suffix[2].toLowerCase()==='women'?'Kadınlar':suffix[2].toUpperCase());
    }
    return raw; // Club names without established Turkish forms are proper names.
  }
  root.SoccerEdgeNames={league,team};
})(typeof window!=='undefined'?window:globalThis);
