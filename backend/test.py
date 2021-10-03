from docxtpl import DocxTemplate
import json



with open('info.json', 'r') as f:
    content = json.load(f)


first_name = content['first_name']
last_name  = content['last_name']
email = content['email']
serieCI = content['serieCI']
numarCI = content['numarCI']
oras =  content['oras']
strada = content['strada']
numar = content['numar']
bloc = content['bloc']
scara = content['scara']
judet = content['judet']

print(scara)


doc = DocxTemplate("first.docx")
context = {'first_name' : first_name, 'last_name': last_name, 'email': email, 'serieCI': serieCI, 'numarCI': numarCI, 'oras': oras, 'strada': strada, 'numar': numar,'bloc':bloc, 'scara': scara, 'judet':judet}

doc.render(context)

doc.save('doc.docx')