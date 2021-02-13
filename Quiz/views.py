from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView

from Quiz.models import TextQuestion


class QuizView(View):
    def get(self, request):
        context = {
            'questions': TextQuestion.objects.get(id=1),
        }
        return render(request, 'quiz.html', context)


class IndexView(TemplateView):
    template_name = 'landing_page.html'
