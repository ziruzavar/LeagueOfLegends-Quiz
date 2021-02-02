from django.shortcuts import render
from django.views import View


class QuizView(View):

    def get(self, request):
        return render(request, 'quiz.html')
