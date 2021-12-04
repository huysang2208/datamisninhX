#So sánh label thực và label dự đoán
f1 = open("demo2.txt", "a", encoding='UTF-8')
f3 = open("label_test_train.txt", "r", encoding='UTF-8')
count = 0
total = 2999
with open('label_train.txt', 'r', encoding='UTF-8') as f2:
    for s_line in f2:
        if s_line == f3.readline():
            count = count+1
        
#Đưa ra độ chính xác        
print("Accuracy :" + count/total)
f1.close()
f3.close()