import json
AF='https://cdn.agenziaentrate.gov.it/portale/it/web/guest/schede/istanze/richiesta-ts_cf/faq-sul-codice-fiscale'
AA='https://www.agenziaentrate.gov.it/portale/documents/20143/278893/istruzioni+cf+AA48_istruzioni+modello+AA4+8.pdf/1c62b06c-535a-5b59-c8e0-4a329a5b4668'
STO='https://consstoccarda.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/codice-fiscale/'
PAR='https://consparigi.esteri.it/it/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/codice-fiscale/'
FF='https://www.fiscal-focus.it/news-24/ore-10-37-cf-sprint-per-i-neonati-la-richiesta-si-fa-sul-sito-dell-agenzia-al-via-il-nuovo-servizio-online-che-taglia-i-tempi,3,171083'
LP='https://lentepubblica.it/?p=346704'; LP2='https://www.lentepubblica.it/cittadini-e-imprese/codice-fiscale-cittadini-enti-organizzazioni/'
PMI='https://www.pmi.it/?p=362269'; INF='https://www.informazionefiscale.it/codice-fiscale-verifica-dati-agenzia-delle-entrate'; V='https://telematici.agenziaentrate.gov.it/VerificaCF/IVerificaCfPf.jsp'
def a(u,t,it=True): return f'<a href="{u}" rel="noopener noreferrer"'+(' lang="it"' if it else '')+f'>{t}</a>'
def ul(items): return '<ul>\n'+''.join(f'<li>{i}</li>\n' for i in items)+'</ul>'
def ol(items): return '<ol>\n'+''.join(f'<li>{i}</li>\n' for i in items)+'</ol>'
def body(sections,srcs,srch,lang,it):
    out=''
    wrap=lambda b: b if b.startswith(('<ul','<ol','<div','<table','<p>')) else f'<p>{b}</p>'
    for h,blocks in sections: out+=f'<h2>{h}</h2>\n'+'\n'.join(wrap(b) for b in blocks)+'\n\n'
    li=''.join(f'<li>{a(u,n,not it)}{lang}{t}</li>\n' for u,n,t in srcs)
    return out+f'<h2>{srch}</h2>\n<ul>\n{li}</ul>'
def write(loc,key,d,b):
    assert len(d['description'])<=160,(loc,key,len(d['description']))
    obj=dict(slug=d['slug'],title=d['title'],h1=d['h1'],description=d['description'],indexDesc=d['indexDesc'],datePublished='2026-10-05',summary=d['summary'],audience=d['audience'],related=d['related'],faq=[dict(q=q,a=a_) for q,a_ in d['faq']],body=b)
    open(f'/home/claude/cfp/src/content/{loc}/guides/{key}.ts','w').write("import type { GuideContent } from '../../../i18n/content';\nconst g: GuideContent = "+json.dumps(obj,ensure_ascii=False,indent=2)+";\nexport default g;\n")
