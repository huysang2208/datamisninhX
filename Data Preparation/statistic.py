#Thống kê số lượng nhãn trong file train
labels = ["__label__tot", "__label__trung_binh", "__label__kem", "__label__xuat_sac", "__label__rat_kem"]
tot = 0
tb = 0
xs = 0
rk = 0
kem = 0
total = 0
with open('sentiment_analysis_train.v1.0.txt', 'r', encoding='UTF-8') as f2:
    for s_line in f2:
        total = total+1
        if s_line.split()[0] == "__label__tot":
            tot = tot+1
        elif s_line.split()[0] == "__label__trung_binh":
            tb = tb+1
        elif s_line.split()[0] == "__label__kem":
            xs = xs+1
        elif s_line.split()[0] == "__label__xuat_sac":
            kem = kem+1
        elif s_line.split()[0] == "__label__rat_kem":
            rk = rk+1
#In ra số lượng và tỉ lệ nhãn trong file train            
print("__label__xuat_sac: " + str(xs) + "\tpercentage: " + str(xs/total*100) +'\n')        
print("__label__tot: " + str(tot) + "\tpercentage: " + str(tot/total*100) +'\n')
print("__label__trung_binh: " + str(tb) + "\tpercentage: " + str(tb/total*100) +'\n')
print("__label__kem: " + str(kem) + "\tpercentage: " + str(kem/total*100) +'\n') 
print("__label__rat_kem: " + str(rk) + "\tpercentage: " + str(rk/total*100) +'\n')       
f2.close()
