from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView


class QuizView(View):

    def get(self, request):
        return render(request, 'quiz.html')


class IndexView(TemplateView):
    template_name = 'landing_page.html'
