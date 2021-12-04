#Tách nhãn dữ liệu train và ghi vào file training_data.txt
labels = ["__label__tot", "__label__trung_binh", "__label__kem", "__label__xuat_sac", "__label__rat_kem"]
f1 = open("training_data.txt", "a", encoding='UTF-8')

with open('sentiment_analysis_train.v1.0.txt', 'r', encoding='UTF-8') as f2:
    for s_line in f2:
        s = s_line.strip() + ' ' + labels[labels.index(s_line.split()[0])] + '\n'
        f1.write(s.lstrip(s.split()[0]) )
f1.close()
f2.close()