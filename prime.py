import sys
sys.setrecursionlimit(10**9)
import math 

prime_numbers = []

def prime(k, i):
    if i==k:
      #소수 임
      print(k, end=" ")
      prime_numbers.append(k)
    else:
      if k/i-k//i==0:
        # 소수 아님
        return
      else:
        # 계산
        prime(k, i + 1)

n=int(input('시작 '))

if n >= 2:
  d=int(input('끝 '))
  print()

  for number in range(n, d + 1):
    prime(number, 2)
  print(f'\n{n}부터 {d}사이의 소수의 개수는 {len(prime_numbers)}')


  #소수 계량 함수
  def pi(x):
    a=x/(math.log(x)-  1.083661)
    return a
  print('소수계량함수 x/(lnx-1.083661)| x =',d,'=>',pi(d))

else:
  print('2 이상으로 입력해 주세요')
