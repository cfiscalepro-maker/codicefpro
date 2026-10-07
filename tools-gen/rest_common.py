exec(open('/tmp/gen/intro_read.py').read().split("# ===================== INTRO")[0])
AR='https://arcom.agenziaentrate.gov.it/CitizenArCom/'; N01='https://www.01net.it/il-codice-fiscale-e-corretto-verificalo-sul-sito-delle-entrate/'
LENTE='https://lentepubblica.it/contabilita-bilancio-tasse-tributi/codice-fiscale-inverso-cose-a-cosa-serve-e-come-si-calcola/'
def emit(loc,key,d,it=False): write(loc,key,d,body(d['secs'],d['srcs'],d['sh'],d['lang'],it))
HOM=[('Castro','Bergamo','C337','Lecce','M261'),('Livo','Como','E623','Trento','E624'),('Peglio','Como','G415','Pesaro e Urbino','G416'),('Samone','Torino','H753','Trento','H754'),('San Teodoro','Messina','I328','Sassari','I329')]
def hom(words): return ul([f'{n}: {p1} <code>{c1}</code>{words}, {p2} <code>{c2}</code>.' for n,p1,c1,p2,c2 in HOM])
