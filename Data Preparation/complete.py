#Ghép nhãn và data để tạo thành file dữ liệu được gán nhãn hoàn chỉnh

f1 = open('demo2.txt', 'a',  encoding='UTF-8')
f3 = open('label_loss_0.6.txt', 'r', encoding='UTF-8')

with open('sentiment_analysis_test_unlabel.v1.0.txt', 'r', encoding='UTF-8') as f2:
    for s_line in f2:
        f1.write((f3.readline()).strip() + ' ' + s_line)
f1.close()
f2.close()
f3.close()
